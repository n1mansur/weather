import React from 'react'
import styles from './Weather_details.module.scss'
import { useSelector } from 'react-redux'

export default function Weather_details() {
  const dataFromRedux = useSelector((data) => data)
  //console.log(dataFromRedux)
  return (
    <div className={styles.main_div}>
      <h3 className={styles.title}>Weather Details</h3>
      <table className={styles.table}>
        <tbody className={styles.tbody}>
          <tr>
            <td>Cloudy</td>
            <td>{`${dataFromRedux?.clouds}%`}</td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{`${dataFromRedux?.humidity}%`}</td>
          </tr>
          <tr>
            <td>Wind</td>
            <td>{`${dataFromRedux?.wind.speed}km/h`}</td>
          </tr>
          <tr>
            <td>Rain</td>
            <td>0mm</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
