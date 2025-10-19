//  useSelector: Hook permettant de sélectionner une partie du state
import { useSelector } from 'react-redux'

export default function CalcResult() {
  // On a accès à tout le state du store mais je vais prendre que calc
  const calc = useSelector((state) => state.calc)

  return (
    <>
      <h1 className="text-slate-100 text-3xl">{calc.value}</h1>
    </>
  )
}
