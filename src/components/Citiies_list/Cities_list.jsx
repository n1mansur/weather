import React from 'react'
import styles from './Cities_list.module.scss'

export default function Cities_list() {
  return (
    <>
      {/*<ul className={styles.cities_list}>
        <li className="city" id='tashkent'>Tashkent</li>
        <li className="city" >Samarqand</li>
      </ul>*/}
      <select className={styles.select} multiple>
        <option className={styles.city} value="Tashkent">
          Tashkent
        </option>
        <option className={styles.city} value="Samarqand">
          Samarqand
        </option>
        <option className={styles.city} value="Buhoro">
          Buhoro
        </option>
        <option className={styles.city} value="Xorazim">
          Xorazim
        </option>
        <option className={styles.city} value="Termiz">
          Termiz
        </option>
        <option className={styles.city} value="Jizzax">
          Jizzax
        </option>
        <option className={styles.city} value="Surhondaryo">
          Surhondaryo
        </option>
        <option className={styles.city} value="Qashqadaro">
          Qashqadaro
        </option>
        <option className={styles.city} value="Namangan">
          Namangan
        </option>
        <option className={styles.city} value="Navoi">
          Navoi
        </option>
        <option className={styles.city} value="Farg`ona">
          Farg`ona
        </option>
        <option className={styles.city} value="Qoraqalpog`iston Respublikasi">
          Qoraqalpog`iston Respublikasi
        </option>
      </select>
    </>
  )
}
