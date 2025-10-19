// Pour faire fonctionner tout ça, on va s'importer dispatch les actions

import { useDispatch } from 'react-redux'
// Et le créateur d'actions
import { updateBoxValue } from '../../features/boxProperties'

export default function BoxColorPicker({ inputData }) {
  const dispatch = useDispatch()

  function handleInputs(e) {
    //On va dispatch updateBoxValue qu'on a import au dessus, avec un objet à l'intérieur
    dispatch(
      updateBoxValue({
        // inputNumber pour retrouver l'input en question
        inputNumber: inputData.inputNumber,
        value: e.target.value,
      })
    )
  }

  return (
    <div className="mt-3">
      <p>{inputData.name}</p>
      <div className="flex mt-2 justify-center items-center">
        <input
          // flex-grow: tu vas t'etendre
          className="block w-full rounded bg-gray-100 border-transparent border-2 focus:border-gray-400 focus:bg-white focus:ring-0 focus:border-2"
          type="text"
          value={inputData.value}
          onChange={handleInputs}
        />
        <input
          className="cursor-pointer h-[40px]"
          value={inputData.value}
          onChange={handleInputs}
          type="color"
        />
      </div>
    </div>
  )
}
