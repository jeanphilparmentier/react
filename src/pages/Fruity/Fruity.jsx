import { useSelector, useDispatch } from 'react-redux'
import FruityCart from './FruityCart'
import { addOne, removeOne } from '../../features/fruitsCart'
import './fruits.css'
// Et on ajoute dessus useDispatch pour envoyer les actions
// Et avec dispatch on va pouvoir dispatch une action grâce aux créateurs d'actions ({ addOne, removeOne  })

export default function Fruity() {
  const fruitList = useSelector((state) => state.fruits)
  const dispatch = useDispatch()
  return (
    <div className="min-h-screen bg-slate-700 px-4">
      <div className="mx-auto max-w-3xl pt-10 pb-20">
        <h1 className="text-4xl text-slate-100 font-bold">Fruty</h1>
        <p className="text-xl text-slate-200 mb-10">
          Pick your fruits and get delivered the next day. 🍍
        </p>
        <ul className="flex gap-4 mb-4">
          {fruitList.list.map((fruit) => (
            <li
              key={fruit.id}
              className="bg-slate-100 p-4 w-full rounded fruits-li"
            >
              <img
                className="w-full h-[150px] sm:h-[250px] object-cover mb-3 fruit-img"
                src={import.meta.env.BASE_URL + fruit.url}
                alt=""
              />
              <div className="sm:flex justify-between items-baseline mb-4">
                <h2 className="text-lg sm:text-2xl lg:text-3xl mb-2 font-semibold">
                  {fruit.name}
                </h2>
                <p className=" text-xs sm:text-base md:text-base lg:text-lg font-semibold">
                  Per unit : {fruit.price}$
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => dispatch(addOne(fruit))}
                  className="w-full bg-green-600 hover:bg-green-500 text-slate-100 p-1 rounded text-xs sm:text-lg"
                >
                  Add one
                </button>
                <button
                  onClick={() => dispatch(removeOne(fruit.id))}
                  className="w-full bg-red-600 hover:bg-red-500 text-slate-100 p-1 rounded text-xs sm:text-lg"
                >
                  Remove one
                </button>
              </div>
            </li>
          ))}
        </ul>
        <FruityCart />
      </div>
    </div>
  )
}
