import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectNavbar from './components/ProjectNavbar'
import Footer from './components/FooterMain'
import Boxy from './pages/Boxy/Boxy'
import Fruity from './pages/Fruity/Fruity'
import Dark from './pages/Dark/Dark'
import Todo from './pages/Todo/Todo'
import Home from './pages/Home/Home'
import Misc from './pages/Misc/Misc'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <>
      <BrowserRouter basename="/react">
        <ProjectNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boxy" element={<Boxy />} />
          <Route path="/fruty" element={<Fruity />} />
          <Route path="/dark" element={<Dark />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/divers" element={<Misc />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
