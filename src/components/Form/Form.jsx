import React from 'react'
import styles from './Form.module.scss'

export default function Form() {
  return (
    <form className={styles.form}>
      <input
        placeholder="Another location"
        type="text"
        className={styles.search_inp}
      />
      <button type="submit" className={styles.search_btn}>
        <box-icon size="30px" name="search"></box-icon>
      </button>
    </form>
  )
}
