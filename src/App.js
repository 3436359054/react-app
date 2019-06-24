import React,{Component} from 'react'
import store from './store'
export default class App extends Component{
  constructor (props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.handleEmit.bind(this))
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  render () {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
        <button onClick={this.handleBtnClick}>确定</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
  
  handleInputChange (e) {
    const action = {
      type: 'inputChange',
      value: e.target.value
    }
    store.dispatch(action)
  }
  handleEmit () {
    this.setState (store.getState()) 
  }
  handleBtnClick () {
    const action = {
      type: 'btnClick'
    }
    store.dispatch(action)
  }
}