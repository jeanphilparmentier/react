import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    inputNumber: 1,
    name: 'Border Radius',
    value: 25,
    type: 'range',
    minMax: [0, 250],
  },
  {
    inputNumber: 2,
    name: 'Height',
    value: 250,
    type: 'range',
    minMax: [0, 500],
  },
  {
    inputNumber: 3,
    name: 'Width',
    value: 250,
    type: 'range',
    minMax: [0, 500],
  },
  {
    inputNumber: 4,
    name: 'Background color',
    value: '#fff',
    type: 'color',
  },
]

export const boxSlice = createSlice({
  name: 'boxPrperties',
  initialState,
  reducers: {
    updateBoxValue: (state, action) => {
      //Tu me trouves l'élément dont inputNumber ===
      //.value = : Une fois que tu as trouvé cet objet: Tu prends la propriété value et tu lui donnes la value action.payload.value
      state.find((el) => el.inputNumber === action.payload.inputNumber).value =
        action.payload.value
    },
  },
})

export const { updateBoxValue } = boxSlice.actions
export default boxSlice.reducer
