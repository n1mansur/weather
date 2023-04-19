export const reducer = (state, action) => {
  switch (action.type) {
    case 'get':
      return action.data
    default:
      return state
  }
}

export const getDataAction = (data) => {
  return { type: 'get', data }
}
