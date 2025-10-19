export default function FooterMain() {
  const currYear = new Date().getFullYear()
  return (
    <footer className="bg-gray-800 p-8 relative z-0">
      <div className="flex">
        <div className="flex-grow">
          <span className="text-gray-500 text-sm font-bold">DEV</span>
          <ul className="mt-4 mb-4">
            <li className="flex-row text-gray-400 font-medium text-sm mb-2">
              <a href="https://nbalovers.fr">Symfony</a>
            </li>
            <li className="flex-row text-gray-400 font-medium text-sm mb-2">
              <a href="https://nbalovers.fr/download">React Native</a>
            </li>
            <li className="flex-row text-gray-400 font-medium text-sm mb-2">
              <a href="https://jean-phil.gitlab.io/react/">React</a>
            </li>
            <li className="flex-row text-gray-400 font-medium text-sm mb-2">
              <a href="https://jean-phil.gitlab.io/vuejs-3/">Vue 3</a>
            </li>
            <li className="flex-row text-gray-400 font-medium text-sm mb-2">
              <a href="https://jp-parmentier-next.vercel.app/">Next</a>
            </li>
            <li className="flex-row text-gray-400 font-medium text-sm mb-2">
              <a href="https://jean-phil.gitlab.io/nuxt/">Nuxt</a>
            </li>
            <li className="flex-row text-gray-400 font-medium text-sm mb-2">
              <a href="https://rentacomic.ovh">Symfony (ancien)</a>
            </li>
            <li className="flex-row text-gray-400 font-medium text-sm mb-2">
              <a href="https://jean-phil.gitlab.io/react-project/">
                React (ancien)
              </a>
            </li>
            <li className="flex-row text-gray-400 font-medium text-sm mb-2">
              <a href="https://jean-phil.gitlab.io/my-vuejs-project/">
                Vue 2 (ancien)
              </a>
            </li>
            <li className="flex-row text-gray-400 font-medium text-sm mb-2">
              <a href="https://old.nbalovers.fr">Php (ancien)</a>
            </li>
          </ul>
          <span className="text-gray-500 text-sm font-bold">APP</span>
          <ul className="mt-4 mb-6">
            <li className="flex-row text-gray-400 font-medium text-sm mb-2">
              <a href="https://nbalovers.fr/download">Android</a>
            </li>
            <li className="flex-row text-gray-400 font-medium text-sm mb-2">
              <a href="https://nbalovers.fr/download">iOS</a>
            </li>
          </ul>
        </div>
        <div className="flex-grow">
          <span className="text-gray-500 text-sm font-bold">CONTACT</span>
          <ul className="mt-4 mb-4">
            <li className="flex-row text-gray-400 font-medium text-sm mb-2">
              <a href="https://www.linkedin.com/in/jean-philippe-parmentier/">
                LinkedIn
              </a>
            </li>
            <li className="flex-row text-gray-400 font-medium text-sm mb-2">
              Contact
            </li>
          </ul>
          <span className="text-gray-500 text-sm font-bold">LEGAL</span>
          <ul className="mt-4 mb-6">
            <li className="flex-row text-gray-400 font-medium text-sm mb-2">
              Terms of use
            </li>
            <li className="flex-row text-gray-400 font-medium text-sm mb-2">
              Privacy policy
            </li>
            <li className="flex-row text-gray-400 font-medium text-sm mb-2">
              Cookie policy
            </li>
          </ul>
        </div>
      </div>
      <div className=" border-b border-b-gray-600 mb-2"></div>
      <p className="text-gray-300 rounded-md py-2 text-md font-medium">
        © {currYear} Jean-Philippe Parmentier - All right reserved
      </p>
    </footer>
  )
}
