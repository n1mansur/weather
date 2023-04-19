import React from 'react'
import styles from './Main.module.scss'
import Info_bar from '../Info_bar/Info_bar'
import { useSelector } from 'react-redux'
import { date } from '../../functions/getDate'
import rainy from '../../img/rainy.jpg'
import cloudy from '../../img/Cloudy.jpg'
import snowly from '../../img/snowly.jpg'
import Sunny from '../../img/Sunny.jpg'

export default function Main() {
  const dataFromRedux = useSelector((data) => data)
  console.log(dataFromRedux?.weather)
  const wraper = document.querySelector(`.${styles.wrapper}`)
  if (dataFromRedux?.weather == 'Clouds') {
    wraper.style.cssText = `background: url(${cloudy});`
  } else if (dataFromRedux?.weather == 'rainy') {
    wraper.style.cssText = `background: url(${rainy});`
  } else if (dataFromRedux?.weather == 'snowly') {
    wraper.style.cssText = `background: url(${snowly});`
  } else if (dataFromRedux?.weather == 'Clear') {
    wraper.style.cssText = `background: url(${Sunny});`
  }
  const weaterFn = () => {
    switch (dataFromRedux?.weather) {
      case 'Clouds':
        return (
          <div className={styles.weather}>
            <span className={styles.ico}>
              <box-icon size="40px" color="#fff" name="cloud"></box-icon>
            </span>
            <span className={styles.weatherState}>Mainly cloudy</span>
          </div>
        )
      case '':
        return (
          <div className={styles.weather}>
            <span className={styles.ico}>
              <box-icon
                size="40px"
                color="#fff"
                name="cloud-light-rain"
              ></box-icon>
            </span>
            <span className={styles.weatherState}>Mainly cloudy</span>
          </div>
        )
      default:
        return (
          <div className={styles.weather}>
            <span className={styles.ico}>
              <box-icon size="40px" color="#fff" name="sun"></box-icon>
            </span>
            <span className={styles.weatherState}>Sunny</span>
          </div>
        )
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h1 className={styles.title}>The.weather</h1>
          <div className={styles.weather_section}>
            <span className={styles.deg}>
              {dataFromRedux ? `${Math.round(dataFromRedux?.temp)}˚` : ''}
            </span>
            <div className={styles.nameAndDate}>
              <span className={styles.city}>{dataFromRedux?.name}</span>
              <span className={styles.date}>{date()}</span>
            </div>
            {weaterFn()}
          </div>
        </div>
        <Info_bar />
      </div>
    </div>
  )
}
