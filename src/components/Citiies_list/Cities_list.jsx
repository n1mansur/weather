import React, { useEffect } from 'react'
import styles from './Cities_list.module.scss'
import { createoptions } from './cities'
import { getDataAction } from '../../redux/reducer'
import { useDispatch } from 'react-redux'
const API_KEY = 'd3f85ab0c810190d954eadfc3332cdd5'

export default function Cities_list() {
  const dispatch = useDispatch()
  const getWeather = async (city = 'Tashkent') => {
    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
    const data = await api_url.json()
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
  useEffect(() => {
    getWeather()
  }, [])
  return (
    <>
      <ul className={styles.select} onClick={(e) => getWeather(e.target.textContent)}>
        {createoptions}
      </ul>
    </>
  )
}
