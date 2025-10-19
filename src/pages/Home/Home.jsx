import {
  Square2StackIcon,
  Bars4Icon,
  MoonIcon,
  BuildingStorefrontIcon,
  CalculatorIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import myPicture from '../../assets/16049-less-100-544.jpg'
import reactIcon from '@heroicons/react'
import reactSvg from '../../assets/react.svg'

import { useContext } from 'react'

const features = [
  {
    name: 'Boxy Generator',
    description:
      "J'utilise ici React Redux. Je crée le store avec configureStore. Je configure le reducer avec createSlice (je crée les cas de reducer et le créateur d'action). Je sélectionne le state avec useSelector et j'envoie les actions avec useDispatch.",
    icon: Square2StackIcon,
    to: '/boxy',
  },
  {
    name: 'To-do List',
    description:
      "Ici c'est un exemple simple d'utilisation de useState pour la validation d'un formulaire. Si le champ est vide, je change la valeur du state pour provoquer une mise à jour. Et j'utilise un short-circuit operator pour afficher le message d'erreur.",
    icon: Bars4Icon,
    to: '/todo',
  },
  {
    name: 'Dark Mode',
    description:
      "Pour m'entraîner je vais utiliser l'Api de context avec createContext. Je vais entourer mon application d'un contexte et lui fournir (Provide) des données. Ici il s'agira d'une variable et d'une fonction permettant de changer le mode d'affichage. J'utiliserai ces données grace à useContext.",
    icon: MoonIcon,
    to: '/dark',
  },
  {
    name: 'Fruty',
    description:
      "Ici comme pour Boxy Generator c'est un exemple d'utilisation de Redux. Avec createSlice on se crée un state initial (un tableau vide au début) et des créateurs d'actions. On importe le state initial avec useSelector. On va envoyer des actions grâce à dispatch qui vont ajouter un objet (un fruit) dans le tableau et initialiser sa quantité à 1 ou l'augmenter.",
    icon: BuildingStorefrontIcon,
    to: '/fruty',
  },
  {
    name: 'Divers',
    description:
      "On retrouve ici un exemple de validation de formulaire (on utilise useState ici). La calculatrice est un exemple simple d'utilisation de Reducer (react-redux) et de createSlice (reduxjs/toolkit). Pour le compte à rebours c'est la même chose avec juste setInterval en plus.",
    icon: CalculatorIcon,
    to: '/divers',
  },
  {
    name: 'Older React Projects',
    description:
      "Ces projets plus anciens ont été créé avec Create-react-app et utilisent Bootstrap. C'est un peu l'ancienne façon de faire pour tout ce qui concerne les Reducers. J'utilise React-redux, redux, l'API de context et axios pour appeler une API. Et à cette époque j'adorais vraiment les linear-gradient.",
    icon: BuildingLibraryIcon,
    to: 'https://jean-phil.gitlab.io/react-project/',
  },
]

console.log(myPicture)

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center mt-16 sm:mt-16 md:mt-14 lg:mt-16">
        <img className="w-40" src={reactSvg} alt="" />
      </div>
      <div className="bg-white py-10 sm:py-10 md:py-14 lg:pt-20 lg:pb-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">React App</h2> */}
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
              Bienvenue sur mon application React
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Le but ici est de mettre en place différents concepts de React.
              C'est une preuve de concept, un entrainement, une démo. J'utilise
              Vite comme bundler et Tailwind CSS pour le style. Ne soyez pas
              trop regardant concernant le style, ce n'était pas le but ici. Je
              le ferai plus tard si je décide d'y consacrer du temps.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="cursor-pointer absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <Link to={feature.to}>
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                    <Link to={feature.to}>{feature.name}</Link>
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 lg:px-8">
        {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" /> */}
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “En espérant vous avoir intéressé avec ce proof of concept 🤖 Je
                me suis bien amusé à le faire 🎉 La suite pour moi sera
                d'étudier Next.js et Typescript 🚀”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-[11rem] w-[11rem] rounded-full"
                // src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                src={myPicture}
                alt=""
              />
              <div className="mt-9 sm:flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900 flex items-center justify-center">
                  Jean-Philippe Parmentier
                </div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900 hidden sm:block"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600 flex items-center justify-center">
                  Développeur Php, Symfony, React, Vue
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  )
}
