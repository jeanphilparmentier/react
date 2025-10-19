// Pour afficher ou non la modal on a besoin du state
import { useState } from 'react'
// createPortal permet d'insérer un element dans une partie du dom (ici à la fin du body)
import { createPortal } from 'react-dom'
import ModalResult from './ModalResult'

export default function ModalBtn() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      {/* On va créer un nouveau contexte d’empilement et le mettre au dessus (pour par que l'effet se superpose à l’élément)
      Pour cela valeur de position autre que static: relative
      Et z-0  et hop le bouton passe au dessus de l'effet */}
      <button
        onClick={() => setShowModal(!showModal)}
        className="relative z-0 mx-auto mt-2 py-1 px-3 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
      >
        Get the code
      </button>
      {showModal &&
        createPortal(
          <ModalResult closeModal={() => setShowModal(!showModal)} />,
          document.body
        )}
    </>
  )
}
