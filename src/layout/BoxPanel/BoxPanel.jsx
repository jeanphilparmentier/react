//On va devoir utiliser le state qu'on a mis en place pour la box donc:
import { useSelector } from 'react-redux'
import BoxRange from './BoxRange'
import BoxColorPicker from './BoxColorPicker'

export default function BoxPanel() {
  // Pour sélectionner le state qu'on veut:
  const boxState = useSelector((state) => state.boxProperties)
  // Se créer un tableau avec tous les elements que l'on a envie de montrer. Donc on va maper:
  const boxInputs = boxState.map((input, index) => {
    // Ca parcourt dans boxProperties.js initialState
    if (input.type === 'range') {
      return <BoxRange key={index} inputData={input} /> //Dans mon tableau on va retourner BoxRange
    } else if (input.type === 'color') {
      return <BoxColorPicker key={index} inputData={input} />
    }
  })
  return (
    <div className="bg-gray-50 px-6 py-4 border-gray-300">
      <p className="font-bold text-lg my-2 text-gray-700 ">Box properties:</p>
      {boxInputs}
    </div>
  )
}
