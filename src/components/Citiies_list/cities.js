import styles from './Cities_list.module.scss'
const uzb = [
  { text: 'Tashkent', value: 'Tashkent' },
  { text: 'Samarqand', value: 'Samarqand' },
  { text: 'Buhoro', value: 'Buhoro' },
  { text: 'Urganch', value: 'Urganch' },
  { text: 'Termiz', value: 'Termiz' },
  { text: 'Jizzax', value: 'Jizzakh' },
  { text: 'Surhondaryo', value: 'Termiz' },
  { text: 'Qarshi', value: 'Qarshi' },
  { text: 'Namangan', value: 'Namangan' },
  { text: 'Navoiy', value: 'Navoiy' },
  { text: 'Farg`ona', value: "Farg'ona" },
  { text: 'Nukus', value: 'Nukus' },
]
export const createoptions = uzb.map((el, i) => (
  <option className={styles.city} value={el.value} key={i}>
    {el.text}
  </option>
))
