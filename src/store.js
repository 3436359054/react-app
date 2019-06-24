import {createStore} from 'redux'
import reducer from './reducer'
const store = createStore(reducer, {
  inputValue: 'text',
  list: []
})
export default store