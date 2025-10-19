import Header from '../../components/Header'
import LeftContainer from '../../layout/LeftContainer'
import Visualization from '../../layout/Visualization/Visualization'

export default function Boxy() {
  return (
    // min-h-screen: Au minimum tu prends toute la hauteur de l’écran
    // flex: Tu utilises flex flex box
    // flex-col: Et tu mets tout en colonne
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* 
      flex-grow: pour le milieu et prendre l'espace restant (toute la hauteur).
      md:flex-nowrap: Au dessus de md flex-nowrap, tu ne vas pas wrap */}
      <main className="flex flex-wrap justify-center items-center flex-grow bg-gray-100 px-10 md:flex-nowrap sm:pb-6">
        <LeftContainer />
        <Visualization />
      </main>
    </div>
  )
}
