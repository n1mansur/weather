import React from 'react'
import styles from './Info_bar.module.scss'
import Form from '../Form/Form'
import Cities_list from '../Citiies_list/Cities_list'
import Weather_details from '../Weather_details/Weather_details'

export default function Info_bar() {
  return (
    <div className={styles.infoBar} id="infoBar">
      <Form />
      <Cities_list />
      <div className={styles.first}></div> {/*hr*/}
      <Weather_details />
      <div className={styles.last}></div> {/*hr*/}
    </div>
  )
}
