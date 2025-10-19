import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = [
  {
    id: nanoid(8),
    active: true,
    inset: false,
    inputs: [
      {
        inputNumber: 1,
        name: 'Horizontal offset',
        value: 0,
        type: 'range',
        minMax: [-250, 250],
      },
      {
        inputNumber: 2,
        name: 'Vertical offset',
        value: 10,
        type: 'range',
        minMax: [-250, 250],
      },
      {
        inputNumber: 3,
        name: 'Blur Radius',
        value: 15,
        type: 'range',
        minMax: [0, 250],
      },
      {
        inputNumber: 4,
        name: 'Spread offset',
        value: -3,
        type: 'range',
        minMax: [-250, 250],
      },
      {
        inputNumber: 5,
        name: 'Color',
        value: '#4f4f4f',
        type: 'color',
      },
    ],
  },
]

export const shadowSlice = createSlice({
  name: 'shadows',
  initialState,
  reducers: {
    removeShadow: (state, action) => {
      // state.findIndex(: Tu me trouves l'index
      // state.findIndex(shadow: de l'ombre
      // => shadow.id === action.payload: dont l'id === action.payload
      const shadowIndexToRemove = state.findIndex(
        (shadow) => shadow.id === action.payload
      )

      // A partir de cet index on enlève un élément
      state.splice(shadowIndexToRemove, 1)
    },
    addShadow: (state, action) => {
      state.push({
        id: nanoid(8),
        active: true,
        inset: false,
        inputs: [
          {
            inputNumber: 1,
            name: 'Horizontal offset',
            value: 0,
            type: 'range',
            minMax: [-250, 250],
          },
          {
            inputNumber: 2,
            name: 'Vertical offset',
            value: 10,
            type: 'range',
            minMax: [-250, 250],
          },
          {
            inputNumber: 3,
            name: 'Blur Radius',
            value: 15,
            type: 'range',
            minMax: [0, 250],
          },
          {
            inputNumber: 4,
            name: 'Spread offset',
            value: -3,
            type: 'range',
            minMax: [-250, 250],
          },
          {
            inputNumber: 5,
            name: 'Color',
            value: '#4f4f4f',
            type: 'color',
          },
        ],
      })
    },
    updateShadowValue: (state, action) => {
      // On a besoin de 2 choses:
      // 1-L'ombre qu'il faut sélectionner
      //
      const currentShadow = state.find(
        //L'ombre dont l'ID est === action.payload.shadowID
        (shadow) => shadow.id === action.payload.shadowID
      )
      // 2-Et L'input en question:
      const currentInput = currentShadow.inputs.find(
        (input) => input.inputNumber === action.payload.inputNumber
      )

      // On prend l'ombre qu'on a modifié, on prend le bon input de cette ombre et on change la valeur de cet input:
      // Une fois qu'on a les 2:
      currentInput.value = action.payload.value
    },
    updateCheckbox: (state, action) => {
      const currentShadow = state.find(
        //L'ombre dont l'ID est === action.payload.shadowID
        (shadow) => shadow.id === action.payload.shadowID
      )

      currentShadow[action.payload.name] = !currentShadow[action.payload.name]
    },
  },
})

export const { updateShadowValue, addShadow, updateCheckbox, removeShadow } =
  shadowSlice.actions
export default shadowSlice.reducer
