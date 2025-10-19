// Notre inventaire par défaut sera ici
import { createAction, createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
// Après react 19:
const fruitsCartAddOne = createAction('fruitsCart/addOne')

const initialState = {
  list: [
    {
      name: 'Mango',
      url: '/images/mango.jpg',
      price: 5,
      id: nanoid(5),
    },
    {
      name: 'Watermelon',
      url: '/images/watermelon.jpg',
      price: 7,
      id: nanoid(5),
    },
  ],
}
// Exécuter createSlice avec les bonnes conf.
// name: utilisé pour créer les actions.
// Pas besoin d'ajouter pour l'instant de
// créateur d'action et de cas de reducer ici.
// On peut écrire un reducer vide
export const fruits = createSlice({
  name: 'fruits',
  initialState,
  // Pas de reducer (car pas eu besoin de créer des actions):
  reducers: {},
  // Pour faire réagir un reducer à un changement de state pour lequel il n'est pas lié il va falloir créer un extraReducer
  extraReducers: (builder) => {
    // On va créer un cas de reducer qui correspond à une action créé par une autre slice
    // Une action qui va modifier du state auquel il n'est pas lié. Il faut donner le nom de l'action et les noms d'actions. Comme cela: fruitsCart/addOne
    // Car les actions une fois envoyé au store déclenche TOUS les reducers
    // Avant react 19:
    // ["fruitsCart/addOne"]: (state, action) => {
    // Après react 19:
    builder.addCase(fruitsCartAddOne, (state, action) => {
      console.log('Hello from fruits reducer')
    })
    // Ca permet de réagir à un changement de state auquel je(ce reducer) ne suis pas lié
  },
})

export default fruits.reducer
