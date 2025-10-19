// Pour faire fonctionner tout ça, on va s'importer dispatch les actions
import { useDispatch } from 'react-redux'
import { updateShadowValue } from '../../features/shadows'

export default function ShadowColorPicker({ inputData, shadowID }) {
  const dispatch = useDispatch()

  function handleInputs(e) {
    // On va dispatch updateBoxValue qu'on a import au dessus, avec un objet à l'intérieur
    dispatch(
      updateShadowValue({
        // inputNumber pour retrouver l'input en question
        inputNumber: inputData.inputNumber,
        value: e.target.value,
        shadowID,
      })
    )
  }

  return (
    <div className="mt-3">
      <p>{inputData.name}</p>
      <div className="flex mt-2 justify-center items-center">
        <input
          className="block w-full rounded bg-gray-100 border-transparent border-2 focus:border-gray-400 focus:bg-white focus:ring-0  focus:border-2"
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
