import { useState } from 'react'
import Pseudo from './Pseudo'
import Password from './Password'
import Confirmation from './Confirmation'

export default function Validation() {
  const [inputsStates, setInputsStates] = useState({
    pseudo: '',
    password: '',
    passwordConfirmation: '',
  })
  const [showValidation, setShowValidation] = useState({
    pseudo: false,
    password: false,
    passwordConfirmation: false,
  })
  console.log(inputsStates)

  function handleSubmit(e) {
    e.preventDefault()

    if (validationCheck()) {
      console.log('Envoi du formulaire')
    }
  }

  function validationCheck() {
    const areValid = {
      pseudo: false,
      password: false,
      passwordConfirmation: false,
    }

    if (inputsStates.pseudo.length < 3 || inputsStates.pseudo.length > 64) {
      // On utilise une fonction callback pour retourner un objet donc on l'entoure de parenthèses ({...})
      //l'objet sera une copie du state (...state) et on change la valeur de pseudo à true afin de montrer le message d'erreur

      // Encore quand on a une fonction fléchée faut penser au return implicite, j'ai envie de retourner implicitement un objet il faut donc mettre les parenthèses
      // Si on ne met pas les parenthèses ça va croire que je suis entrain d'ouvrir les accolades d'une fonction et ça pas le comprendre

      // Pourquoi la call back ici (state =>) car il va y avoir plusieurs changements de state au niveau de cette même fonction(c'est possible), il faudra donc pouvoir utiliser le retour des fonctions callback précédentes. C'est le cas de figure où la fonction callback dans le setState peut être utilisée.
      setShowValidation((state) => ({ ...state, pseudo: true }))
    } else {
      areValid.pseudo = true
      setShowValidation((state) => ({ ...state, pseudo: false }))
    }
    // /\d/ regex \d: tous les chiffres
    // /\d/.test but pour voir si ca contient un chiffre (/\d/.test si contient pas des chiffres retourne false)
    if (inputsStates.password.length < 6 || !/\d/.test(inputsStates.password)) {
      setShowValidation((state) => ({ ...state, password: true }))
    } else {
      areValid.password = true
      setShowValidation((state) => ({ ...state, password: false }))
    }
    if (inputsStates.passwordConfirmation !== inputsStates.password) {
      setShowValidation((state) => ({ ...state, passwordConfirmation: true }))
    } else {
      areValid.passwordConfirmation = true
      setShowValidation((state) => ({ ...state, passwordConfirmation: false }))
    }
    console.log('areValid', areValid)
    //return {pseudo: false, password: false, passwordConfirmation: true}

    console.log('Object.values(areValid)', Object.values(areValid))
    //returns [false, false, true]

    // .every(): Méthode des tableaux permettant de vérifier si tous les éléments d'un tableau respectent le retour de la condition (donc une certaine condition).
    // On va mettre value mais on aurait pu mettre validation
    // value => value et on retourne juste value, le retour de la call back c'est juste value. Et donc ça va vérifier if value est-ce que c'est "trussy" (true) ?
    console.log(
      'Object.values(areValid)',
      Object.values(areValid).every((value) => value)
    )
    // Si tous les éléments de ce tableau sont des true every va retourner true
    if (Object.values(areValid).every((value) => value)) {
      return true
    } else {
      false
    }
  }
  return (
    <form
      className="max-w-xl mx-auto border p-10 rounded"
      onSubmit={handleSubmit}
    >
      <p className="text-slate-100 text-xl mb-6">
        Créez votre nom d'utilisateur et mot de passe
      </p>
      <Pseudo
        inputsStates={inputsStates}
        setInputsStates={setInputsStates}
        showValidation={showValidation}
      />
      <Password
        inputsStates={inputsStates}
        setInputsStates={setInputsStates}
        showValidation={showValidation}
      />
      <Confirmation
        inputsStates={inputsStates}
        setInputsStates={setInputsStates}
        showValidation={showValidation}
      />
      <button className="mt-10 bg-slate-100 py-2 min-w-[125px] rounded">
        Valider
      </button>
    </form>
  )
}
