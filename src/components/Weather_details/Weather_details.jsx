import React from 'react'
import styles from './Weather_details.module.scss'

export default function Weather_details() {
  return (
    <div className={styles.main_div}>
      <h3 className={styles.title}>Weather Details</h3>
      <table className={styles.table}>
        <tbody className={styles.tbody}>
          <tr>
            <td>Cloudy</td>
            <td>12%</td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>78%</td>
          </tr>
          <tr>
            <td>Wind</td>
            <td>1km/h</td>
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
