import { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import ListeItems from '../../components/ListeItems/ListeItems'

export default function Todo() {
  const [todoList, setTodoList] = useState([
    { id: nanoid(4), content: 'item 1' },
    { id: nanoid(4), content: 'item 2' },
    { id: nanoid(4), content: 'item 3' },
    { id: nanoid(4), content: 'item 4' },
  ])
  const [todo, setTodo] = useState('')
  const [showValidation, setShowValidation] = useState(false)

  function deleteTodo(id) {
    // Filtre todoList et retourne tous les elements qui n'ont pas cet id
    // Retourne un tableau avec tous les objets qui ont un id different de l'id qu'on passe à la fonction
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }
  function handleSubmit(e) {
    e.preventDefault() // Pour empêcher la mise à jour du navigateur

    // Un control ici pour ne pas ajouter de tache vide
    if (todo === '') {
      setShowValidation(true)
      return // je return, je n'exécute pas ce qu il reste
    }
    // On ne fait pas de push on doit faire un setTodoList d'un nouveau tableau
    // spread operator de ce qui existe déjà
    setTodoList([...todoList, { id: nanoid(), content: todo }])

    // Juste pour reset le champ:
    setTodo('')
    // On a bien réussi à envoyer on le repasse à false
    // Et ne pas s'inquiéter si on change du state avec exactement les mêmes valeurs que à ligne 16 ça va le repérer et ne pas provoquer de mise à jour
    setShowValidation(false)
  }
  return (
    <div className="bg-slate-900 pb-10">
      <div className="max-w-4xl mx-auto pt-20 py-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">La To-do liste</h1>

        <form onSubmit={handleSubmit} className="mb-10">
          <label htmlFor="todo-item" className="text-slate-50">
            Ajouter une chose à faire
          </label>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            className="mt-1 block w-full rounded"
            name=""
            id=""
          />
          {showValidation && (
            <p className="text-red-400">
              Ajoutez d'abord du contenu à votre tâche
            </p>
          )}
          <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-w-[115px}">
            Ajouter
          </button>
        </form>
        <ul>
          {/* Short circuit operator si todoList.length===0 est true ça va essayer d'exécuter la méthode jsx qui crée le <li> on se fiche ici que ça retourne true ou false ici */}
          {todoList.length === 0 && (
            <li className="text-md text-slate-50">Pas d'items à afficher...</li>
          )}
          {/* Ici pour pas qu'il y ait d'exécution pour rien on va ajouter un short circuit operator */}
          {/* juste en ajoutant: */}
          {/* todoList.length>0 &&  avant todoList.map */}
          {/* avant */}
          {/* {todoList.map(item => ( */}
          {/* apres */}
          {todoList.length > 0 &&
            todoList.map((item) => (
              <ListeItems
                key={item.id}
                itemData={item}
                deleteTodo={deleteTodo}
              />
            ))}
        </ul>
      </div>
    </div>
  )
}
