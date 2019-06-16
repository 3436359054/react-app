import React, { Component } from 'react'
import Item from "./Item"
export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtomClick = this.handleButtomClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.state = {
      val: 'bu',
      list: []
    }
  }
  render() {
    const list = this.state.list.map((item, index) => {
      return <Item 
                  item={item} 
                  key={index} 
                  index={index} 
                  handleDeletes={this.handleDelete}/>
    })
    return (
      <div>
        <input type="text" value={this.state.val} onChange={this.handleInputChange} /><button onClick={this.handleButtomClick}>确定</button>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
  handleInputChange(e) {
    this.setState({
      val: e.target.value
    })
  }
  handleButtomClick() {
    this.setState({
      list: [...this.state.list, this.state.val]
    })
  }
  handleDelete(index) {
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list: list  
    })
  }
}