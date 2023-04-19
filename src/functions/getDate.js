const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
export const date = (date = new Date()) => {
  const h = date.getHours() < 9 ? '0' + date.getHours() : date.getHours()
  const min = date.getMinutes()
  const d = date.getDate()
  const m = date.getMonth()
  const y = date.getFullYear()
  const day = days[new Date().getDay()]
  return `${h}:${min} - ${day} ${d} ${monthNames[m]} ${y}`
}
