import { configureStore } from '@reduxjs/toolkit'
import shadows from './features/shadows'
import fruits from './pages/Fruity/Fruits'
import fruitsCart from './features/fruitsCart'
import boxProperties from './features/boxProperties'
import chrono from './features/chrono'
import calc from './features/calc'

export const store = configureStore({
  reducer: {
    shadows,
    boxProperties,
    fruits,
    fruitsCart,
    chrono,
    calc,
  },
})
