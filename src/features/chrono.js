import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 100,
  //intervalID qui va permettre de le supprimer si on a envie
  intervalID: undefined,
}

// On export l'objet retourné par createSlice (les créateurs d'actions etc)
export const chrono = createSlice({
  name: 'chrono',
  initialState,
  //   Et toutes les méthodes qui vont nous permettre de configurer
  reducers: {
    tick: (state, action) => {
      state.value--
    },
    reset: (state, action) => {
      state.value = 100
      state.intervalID && window.clearInterval(state.intervalID)
      state.intervalID = undefined //Pour éviter d'en déclencher plein. On reset tout
    },
    setUpID: (state, action) => {
      state.intervalID = action.payload
    },
  },
})
// Le thunk
export function startChrono(action) {
  // Le créateur d'action qui peut prendre une action (pas ici))
  return function (dispatch, getState) {
    // getState permet d'avoir le state du store
    if (getState().chrono.intervalID) return //Si il y en a déjà un en cours tu ne peux pas spam
    //setInterval() retourne l'ID de setInterval
    const intervalID = setInterval(() => {
      dispatch(tick())
    }, 1000) // Toutes les 1000ms
    dispatch(tick()) // sinon on attend 1 seconde
    dispatch(setUpID(intervalID)) // Pour set: intervalID: undefined à something
  }
}

export const { tick, reset, setUpID } = chrono.actions
export default chrono.reducer // Et le reducer qui permet de changer le state
