import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';

import './ToggleTheme.css';
// Ici on importe le contexte en question (avec ses données)
import { ThemeContext } from '../../context/ThemeProvider';
import { useContext } from 'react'; // Permet d'utiliser le contexte

export default function ToggleTheme() {
  // useContext du contexte qu'on a créé et initialisé
  // const theme = useContext(ThemeContext)

  // On retrouve l'objet qu'on a initialisé dans ThemeProvider.jsx
  // ici : <ThemeContext.Provider value={{ToggleTheme, darkMode}}>
  // Mais on va plutôt faire du destructuring
  const { toggleTheme, darkMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="toggle-theme-btn">
      <span>Go {darkMode ? 'Light' : 'Dark'}</span>
      <img src={darkMode ? sun : moon} alt="toggle icon" />
    </button>
  );
}
