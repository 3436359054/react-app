import React, {Component} from 'react' 
export default class Item extends Component {
  constructor (props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  render () {
    return (
      <li>{this.props.item}<i onClick={this.handleDelete}>delete</i></li>
    )
  }
  handleDelete () {
    this.props.handleDeletes(this.props.index) 
  }
}