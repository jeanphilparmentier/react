import { useState } from 'react'
import ShadowList from './ShadowList/ShadowList'
import BoxPanel from './BoxPanel/BoxPanel'

export default function LeftContainer() {
  const [tabs, setTabs] = useState(0) //On montre en premier le 1er composant. De quelle liste ?

  //On peut mettre des elements jsx dans des tableaux
  const tabsList = [
    { name: 'Shadow', component: <ShadowList /> },
    { name: 'BoxPanel', component: <BoxPanel /> },
  ]

  return (
    // relative pour les enfants en absolute
    // md:mt-0 : Au dessus de md on à mt = 20
    <div className="relative mt-14 w-[600px] h-[550px] border rounded-b rounded-tr border-gray-300 shadow-xl bg-gray-50">
      {/* -translate-y-full: -100% sur translate y 
      On doit les mettre en haut à 100% de leur hauteur ca va bien les placer en dessus */}
      {/* -left-1[1px]: juste pour mieux le placer */}
      <div className="flex absolute -translate-y-full -left-1[1px]">
        {/* {tabsList.map((tab, index) => { 
        ça ouvre la fonction il faudrait à la limite rajouter un 
        return puis le jsx retourné
        */}
        {/* {tabsList.map((tab, index) => ( 
        return implicite du jsx sur plusieurs lignes grace aux parenthèses ()
        */}
        {tabsList.map((tab, index) => (
          <button
            key={index}
            // Sur le clic on va changer le state
            onClick={() => setTabs(index)}
            className="min-w-[125px] py-2 px-3 mr-4 font-bold border-t border-x border-gray-300 bg-slate-50 hover:bg-slate-200 text-slate-700 rounded-t focus:outline-none focus:ring-2 ring-inset focus:ring-blue-300"
          >
            {/* tab.name correspond au name de tabsList */}
            {tab.name}
          </button>
        ))}
      </div>
      {/* h-full overflow-auto à partir du moment ou ca dépasse cette hauteur ca crée une scroll bar*/}
      <div className="h-full overflow-auto">{tabsList[tabs].component}</div>
    </div>
  )
}
