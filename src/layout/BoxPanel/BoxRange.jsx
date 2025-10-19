// Pour faire fonctionner tout ça, on va s'importer dispatch les actions

import { useDispatch } from 'react-redux'
// Et le créateur d'actions
import { updateBoxValue } from '../../features/boxProperties'

export default function BoxRange({ inputData }) {
  // On prend useDispatch ici :
  const dispatch = useDispatch()

  function handleInputs(e) {
    // On va dispatch updateBoxValue qu'on a import au dessus, avec un objet à l'intérieur
    dispatch(
      updateBoxValue({
        // inputNumber pour retrouver l'input en question
        inputNumber: inputData.inputNumber,
        value: e.target.value,
      })
    )
  }

  return (
    <div className="my-6">
      <div className="flex justify-between">
        <p>{inputData.name}</p>
        <div className="flex items-baseline mb-2">
          <input
            value={inputData.value}
            onChange={handleInputs}
            className="w-14 h-8 mr-2 border border-gray-200 text-center"
            type="number"
          />
          <p>px</p>
        </div>
      </div>
      {/* relative z-0: on a envie de créer un nouveau contexte d'empilement */}
      {/* Ca va permetre de placer une tige au milieu qui ne passera pas en dessous de son container */}
      <div className="relative z-0 w-full flex items-center">
        <input
          min={inputData.minMax[0]}
          max={inputData.minMax[1]}
          value={inputData.value}
          onChange={handleInputs}
          className="w-full h-[2px] bg-gray-300 rounded-lg appearance-none cursor-pointer"
          type="range"
        />
        {/* Pour la barre du milieu: */}
        {/* absolute va être placée par rapport à la div ayant relative ci dessus */}
        {/* -z-10: (nouveau contexte d'empilement mais négatif) elle va être sous tout le contenu et ca va se déposer sur le contexte d’empilement parent (cad la div ayant z-0 au dessus) jamais en dessous */}
        {/* top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2: On va le placer à top 50% left 50% transform translate -50-50 pour que ce soit parfaitement centré */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-0.5 h-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  )
}
