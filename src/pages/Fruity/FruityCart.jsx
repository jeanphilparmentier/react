import { useSelector } from 'react-redux'

export default function FruityCart() {
  const frutyCart = useSelector((state) => state.fruitsCart)
  return (
    <div className="bg-slate-100 rounded">
      <p className="text-1xl p-5 border-b border-slate-400 basket-p">
        Your FruityCart
      </p>
      <ul>
        {frutyCart.cart.length > 0 &&
          frutyCart.cart.map((fruit) => (
            <li className="px-5 py-2 text-xl" key={fruit.id}>
              <span className="font-semibold mr-2">{fruit.quantity}</span>
              <span>{fruit.name}</span>
            </li>
          ))}
        {frutyCart.cart.length === 0 && (
          <li className="px-5 py-2 text-xl font-semibold basket-li">
            ... Grab one fruit !
          </li>
        )}
      </ul>
      <p className="text-xl p-5 border-t border-slate-400 basket-p">
        Total amount:
        {frutyCart.cart.length > 0 && (
          //On va faire un reduce ici (pour réduire le prix à un seul prix)
          <span className="font-bold ml-2">
            {/* acc:accumulateur et item: la valeur courante de chaque item */}
            {/* + acc, 0 : qui commencera à zero */}
            {frutyCart.cart.reduce(
              (acc, item) => item.price * item.quantity + acc,
              0
            )}
            $
          </span>
        )}
      </p>
    </div>
  )
}
