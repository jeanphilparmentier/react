import { useSelector, useDispatch } from 'react-redux'
import { startChrono, reset } from '../../features/chrono'

export default function Chrono() {
  const dispatch = useDispatch()
  const chrono = useSelector((state) => state.chrono)

  return (
    <div>
      <p className="text-2xl text-slate-100 mb-4">
        Valeur du chrono : {chrono.value}
      </p>
      <button
        onClick={() => dispatch(startChrono())}
        // Les boutons sont inline block de base donc on peut mettre un min width
        className="p-2 min-w-[125px] bg-slate-100 rounded"
      >
        Start
      </button>
      <button
        onClick={() => dispatch(reset())}
        // Les boutons sont inline block de base donc on peut mettre un min width
        className="p-2 min-w-[125px] bg-slate-100 rounded ml-3"
      >
        Reset
      </button>
    </div>
  )
}
