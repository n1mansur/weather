import styles from './Cities_list.module.scss'
const uzb = [
  { text: 'Tashkent' },
  { text: 'Samarqand' },
  { text: 'Buhoro' },
  { text: 'Urganch' },
  { text: 'Termiz' },
  { text: 'Jizzakh' },
  { text: 'Termiz' },
  { text: 'Qarshi' },
  { text: 'Namangan' },
  { text: 'Navoiy' },
  { text: "Farg'ona" },
  { text: 'Nukus' },
]
export const createoptions = uzb.map((el, i) => (
  <li className={styles.city} key={i}>
    {el.text}
  </li>
))
