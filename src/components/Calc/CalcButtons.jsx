import { useDispatch } from 'react-redux'
import { increment, decrement, multiply, divide } from '../../features/calc'

export default function CalcButtons() {
  //  Dispatch pour envoyer des actions
  const dispatch = useDispatch()

  return (
    <div>
      <p className="text-slate-50 mb-2">L'incroyable calculatrice</p>
      <button
        onClick={() => dispatch(increment())}
        className="w-10 h-10 bg-slate-100 rounded text-slate-900 mr-2"
      >
        +1
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="w-10 h-10 bg-slate-100 rounded text-slate-900 mr-2"
      >
        -1
      </button>
      <button
        onClick={() => dispatch(multiply())}
        className="w-10 h-10 bg-slate-100 rounded text-slate-900 mr-2"
      >
        x10
      </button>
      <button
        onClick={() => dispatch(divide())}
        className="w-10 h-10 bg-slate-100 rounded text-slate-900 mr-2"
      >
        /10
      </button>
    </div>
  )
}
