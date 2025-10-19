import { useState, useEffect } from 'react'
import chevron from '../../assets/chevron.svg'
import ShadowColorPicker from './ShadowColorPicker'
import ShadowRange from './ShadowRange'
import ShadowCheckbox from './ShadowCheckbox'
// On importe notre créateur d'action
import { removeShadow } from '../../features/shadows'
import { useDispatch } from 'react-redux'

export default function Shadow({ panelNumber, shadow }) {
  const dispatch = useDispatch()
  const [toggleShadow, setToggleShadow] = useState(false)

  useEffect(() => {
    if (panelNumber === 1) {
      setToggleShadow(true)
    }
  }, [])

  const shadowInputs = shadow.inputs.map((input, index) => {
    // Ca parcourt dans boxProperties.js initialState
    if (input.type === 'range') {
      return (
        <ShadowRange
          key={index}
          inputData={shadow.inputs[index]}
          shadowID={shadow.id}
        />
      ) //Dans mon tableau on va retourner BoxRange
    } else if (input.type === 'color') {
      return (
        <ShadowColorPicker
          key={index}
          inputData={shadow.inputs[index]}
          shadowID={shadow.id}
        />
      )
    }
  })

  return (
    <li className="bg-gray-50 border-b border-gray-300">
      <button
        className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-100"
        onClick={() => setToggleShadow(!toggleShadow)}
      >
        <span>Shadow {panelNumber}</span>
        <img
          style={{
            transform: `${toggleShadow ? 'rotate(90deg)' : 'rotate(0deg)'}`,
          }}
          className="font-bold w-5"
          src={chevron}
          alt=""
        />
      </button>
      {/* items-end: on va placer tous nos elements vers le bas de y */}
      {toggleShadow && (
        <>
          <div className="flex items-end px-6 pt-4">
            <ShadowCheckbox name={'active'} shadowID={shadow.id} />
            <ShadowCheckbox name={'inset'} shadowID={shadow.id} />
            <button
              onClick={() => dispatch(removeShadow(shadow.id))}
              //   ml-auto pour le placer à droite
              className="ml-auto text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded"
            >
              Remove
            </button>
          </div>
          <div className="px-6 py-4">{shadowInputs}</div>
        </>
      )}
    </li>
  )
}
