import React from 'react'
import styles from './Main.module.scss'
import Info_bar from '../Info_bar/Info_bar'

export default function Main() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h1 className={styles.title}>The.weather</h1>
          <div className={styles.weather_section}>
            <span className={styles.deg}>26</span>
            <span className={styles.city}>London</span>
            <span className={styles.date}> 10:36 - Tuesday, 22 Oct</span>
            <span className={styles.ico}>
              <box-icon size="40px" color="#fff" name="sun"></box-icon>
            </span>
            <span className={styles.weatherState}>Sunny</span>
          </div>
        </div>
        <Info_bar />
      </div>
    </div>
  )
}
