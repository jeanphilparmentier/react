import { useSelector, useDispatch } from 'react-redux'
import { updateCheckbox } from '../../features/shadows'

export default function ShadowCheckbox({ name, shadowID }) {
  // On va sélectionner le state
  // Faut se dire qu'on a l'objet qui correspond à Shadow 1 ici (checkboxShadow)
  const checkboxShadow = useSelector((state) =>
    state.shadows.find((shadow) => shadow.id === shadowID)
  )
  // On récupère les données du store redux
  const dispatch = useDispatch()
  return (
    <>
      <input
        // On passe un objet à updateCheckbox: {shadowID, name}
        onChange={() => dispatch(updateCheckbox({ shadowID, name }))}
        type="checkbox"
        checked={checkboxShadow[name]}
        id={`checkbox-${name}-${shadowID}`}
        // className="h-4 w-4 border-gray-300 rounded mr-2"
        className="mr-2 rounded border-gray-300 text-blue-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
      />
      <label
        className="leading-4 mr-5"
        htmlFor={`checkbox-${name}-${shadowID}`}
      >
        {/* name.slice(1) : plus le reste à partir de position 1 */}
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
    </>
  )
}
