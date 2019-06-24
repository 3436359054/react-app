const reducer = (state, action) => {
  switch (action.type) {
    case 'inputChange': 
      return {
        inputValue: action.value,
        list: [...state.list]
      }
    case 'btnClick': 
      return {
        inputValue: '',
        list: [...state.list, state.inputValue]
      }
    default: return state
  }
}
export default reducer