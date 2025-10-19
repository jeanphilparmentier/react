import Validation from '../../components/Misc/Validation'
import Chrono from '../../components/Misc/Chrono'
import Calc from '../../components/Calc/Calc'

export default function Misc() {
  return (
    <div className="bg-cyan-700 ">
      <div className="pt-8 pb-8">
        <Validation />
      </div>
      <hr className="m-8" />
      <div className="mx-auto max-w-[263px] pt-8 pb-8">
        <Chrono />
      </div>
      <hr className="m-8" />
      <div className="mx-auto max-w-[263px] pt-8 pb-8">
        <Calc />
      </div>
    </div>
  )
}
