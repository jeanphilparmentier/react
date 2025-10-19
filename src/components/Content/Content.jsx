import './Content.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider'

export default function Content() {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className="container dark-side">
      <h1 className="text mb-4 text-4xl font-bold leading-none tracking-tighter">
        You are looking to the {darkMode ? 'Dark' : 'Light'} mode.
      </h1>
      <p className="">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, aut
        consequatur, quos, natus aspernatur id blanditiis velit minima
        voluptates recusandae cumque quaerat? Praesentium, officiis pariatur
        odit eius dolore aut ratione nobis optio quasi assumenda maiores soluta
        ea odio nam incidunt repellendus, aliquam, suscipit placeat quia
        laboriosam asperiores consectetur doloremque? Quisquam perspiciatis,
        obcaecati delectus quis iure porro magnam ut ducimus quasi quos,
        voluptatum illum ipsam fuga cupiditate quam eius asperiores nihil
        assumenda? Consequatur fugit enim provident fuga animi, adipisci dolores
        voluptatibus praesentium omnis ut minima reprehenderit sit quaerat
        necessitatibus quidem ipsa eaque saepe sunt amet expedita. Sit quos
        natus alias maxime?
      </p>
    </div>
  )
}
