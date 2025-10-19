import getBoxShadowValue from '../../../utils/getBoxShadowValue'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function ModalResult({ closeModal }) {
  const shadowValues = useSelector((state) => state.shadows)

  useEffect(() => {
    document.body.style.overflowY = 'hidden'

    // Mais grace à la cleanup function
    // Une fois que le composant est détruit:
    return () => (document.body.style.overflowY = 'auto')
  }, [])

  let runningAnimation = false
  function handleCopy(e) {
    if (!runningAnimation) {
      runningAnimation = true
      e.target.textContent = 'Copied !'

      setTimeout(() => {
        e.target.textContent = 'Copy'
        runningAnimation = false
      }, 1250)
    }

    // Pour faire le copier
    // navigator.clipboard.writeText(getBoxShadowValue(shadowValues))
    // ou bien:
    navigator.clipboard.writeText(
      `box-shadow: ${getBoxShadowValue(shadowValues)}`
    )
  }

  return (
    <div
      // On commence par l'overlay
      // z-10 quand on a un grand site pour que la modal soit vraiment au dessus de tout
      // inset-0 va prendre tout l'espace de fond
      // flex items-center justify-center: pour centrer la modal à l'intérieur
      // bg-gray-600/75: /75 pour de la transparence
      className="fixed z-10 inset-0 flex items-center justify-center bg-gray-600/75"
      onClick={closeModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        // 10vh: 10 % de l'hauteur de l'écran
        className="max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]"
      >
        <div className="flex items-end mb-5">
          <p className="font-semibold mr-5">Here is your code 🎉</p>
          <button
            onClick={handleCopy}
            className="text-sm ml-auto mr-2 bg-blue-600 text-white hover:bg-blue-700 py-1 px-3 rounded"
          >
            Copy
          </button>
          <button
            onClick={closeModal}
            className="text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded"
          >
            Close
          </button>
        </div>
        <p className="rounded bg-gray-100 p-5">
          <span className="font-semibold">box-shadow : </span>
          <span>{getBoxShadowValue(shadowValues)}</span>
        </p>
      </div>
    </div>
  )
}
