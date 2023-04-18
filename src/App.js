import './App.scss'
import 'boxicons'
import Main from './components/Main/Main'
// https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=d3f85ab0c810190d954eadfc3332cdd5
const API_KEY = 'd3f85ab0c810190d954eadfc3332cdd5'

function App() {
  let city = 'Tashkent'
  const gettingWeather = async () => {
    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
    const data = await api_url.json()
    console.log(data)
  }
  return (
    <>
      <Main />
    </>
  )
}

export default App
