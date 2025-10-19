// Résumé ici on utilise create slice qui est la façon moderne de le faire (et fait tout sous le capot). Pas besoin de créer la fonction de créateur d'action et le reducer à la main
// Globalement createSlice va retourner un reducer total à partir de tout ça

// On va créer le reducer mais aussi des créateurs d'action (une action c'est juste un objet ex ({type:deposit, payload:10}) ), et les cas de reducer (case) et ça retourne du state.
import { createSlice } from '@reduxjs/toolkit'

// Initialiser la valeur du state de cette feature
// C'est le state initial
const initialState = {
  value: 0,
}

// Là on lui passe l'objet avec toutes les caractéristiques dont on a parlé
export const calc = createSlice({
  //nom de notre slice
  name: 'calc',
  initialState, //initialState=initialState
  // Dans ce reducer un peu mal nommé on va lui passer des méthodes: ex increment
  reducers: {
    //Résumé: Ici à chaque méthode qu'on lui passe ici va créer une action, un créateur d'action permettant de l'envoyer ET un cas de reducer

    // Cette méthode increment va créer les fameux cas de reducer.
    // Donc ça permet définir les actions de créateur d'actions et les cas de reducer
    increment: (state, action) => {
      // Avec toolkit on a juste besoin d'écrire ça:
      state.value++
      // ou bien
      // state.value = state.value + action.payload

      // Sinon ça aurait été quelque chose comme ça (on devait retourner un nouveau state):
      // return {count: 1}
      // Mais on ne peut pas faire ça
      // state = quelque chose
    },
    decrement: (state, action) => {
      state.value--
    },
    multiply: (state, action) => {
      state.value = state.value * 10
    },
    divide: (state, action) => {
      state.value = state.value / 10
    },
  },
})

// On va retourner les créateurs d'actions
// Les créateurs d'actions se trouvent dans calc.actions
console.log(calc)
export const { increment, decrement, multiply, divide } = calc.actions
// Et un objet (calc retourne un objet qui contient notamment reducer)
export default calc.reducer
