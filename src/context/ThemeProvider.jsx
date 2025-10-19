import { createContext, useState } from 'react'

// ThemeContext : Met en place le contexte (mais je n'ai pas encore de données à partager) et fourni un provider.
// Le provider ce que avec quoi je vais entourer mon application
export const ThemeContext = createContext()

// On va créer le provider
export default function ThemeProvider(props) {
  // De base false donc on aura le light mode
  const [darkMode, SetDarkMode] = useState(false)

  function toggleTheme() {
    SetDarkMode(!darkMode)
  }

  if (darkMode) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }

  return (
    // Le provider va initialiser le state du context avec value=...
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      {/* props.children: va représenter toute mon application */}
      {props.children}
    </ThemeContext.Provider>
  )
}
