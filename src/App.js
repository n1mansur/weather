import './App.scss'
import 'boxicons'
import Main from './components/Main/Main'
import { useState } from 'react'
// https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=d3f85ab0c810190d954eadfc3332cdd5
const API_KEY = 'd3f85ab0c810190d954eadfc3332cdd5'

function App() {
  return (
    <>
      <Main />
    </>
  )
}

export default App
