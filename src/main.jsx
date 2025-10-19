import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'
import ThemeProvider from './context/ThemeProvider.jsx'

// Prior to react v19
// const root = ReactDOM.createRoot(document.getElementById("root"))

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <ThemeProvider>
      {/* On entoure notre application du provider à qui nous allons fournir le store */}
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
)
