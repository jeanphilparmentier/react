import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const fruitsCart = createSlice({
  name: 'fruitsCart', //qui vont être donné à nos actions
  initialState,
  reducers: {
    //On peut envoyer quelques cas de reducer/quelques actions
    addOne: (state, action) => {
      //Ici on va essayer de voir si il est déjà présent dans le panier
      //state.cart.findIndex: tu me trouves l'objet dont l'id (obj => obj.id est strictement = à payload.id
      const fruitIndex = state.cart.findIndex(
        (obj) => obj.id === action.payload.id
      )

      // findIndex si ça ne le trouve pas ça retournera -1
      // Si il existe déjà on augmente juste la qte
      if (fruitIndex !== -1) {
        state.cart[fruitIndex].quantity++
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
    },
    removeOne: (state, action) => {
      // J'essaie de trouver l'objet dont l'id est = à l action payload
      const fruit = state.cart.find((obj) => obj.id === action.payload)

      // Si ce fruit existe:
      if (fruit) {
        if (fruit.quantity === 1) {
          // filter retourne un nouvel objet
          // avec tous les fruits dont l'id sont différents de l'action payload (on garde les autres)
          state.cart = state.cart.filter((fruit) => fruit.id !== action.payload)
        } else {
          fruit.quantity--
        }
      }
    },
  },
})

export const { addOne, removeOne } = fruitsCart.actions //les exports nommés (ici les créateurs d'actions (action qui retourne des actions))
export default fruitsCart.reducer //permet de modif le state et mettre en place le state ini
