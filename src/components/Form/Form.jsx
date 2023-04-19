import React from 'react'
import styles from './Form.module.scss'
import { useDispatch } from 'react-redux'
import { getDataAction } from '../../redux/reducer'
const API_KEY = 'd3f85ab0c810190d954eadfc3332cdd5'

export default function Form() {
  const dispatch = useDispatch()
  const getWeather = async (city = 'Tashkent') => {
    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
    const data = await api_url.json()
    console.log(data)
    const newData = {
      wind: data.wind,
      rain: data.rain,
      humidity: data.main.humidity,
      clouds: data.clouds.all,
      temp: data.main.temp,
      name: data.name,
      weather: data.weather[0].main,
    }
    dispatch(getDataAction(newData))
  }
  const form = (e) => {
    e.preventDefault()
    getWeather(e.target.city.value)
  }

  return (
    <form className={styles.form} onSubmit={(e) => form(e)}>
      <input
        placeholder="Another location"
        type="text"
        name="city"
        className={styles.search_inp}
      />
      <button type="submit" className={styles.search_btn}>
        <box-icon size="30px" name="search"></box-icon>
      </button>
    </form>
  )
}
