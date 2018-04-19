import React from "react"
import "./item.css"

class Item extends React.Component {
	handleCheckboxChange = () => {
	  this.props.function(this.props.index)
	}

	render() {
	  return (
	    <div className="addToTheToList">
	      <input type="checkbox" onChange={this.handleCheckboxChange} />
	      {this.props.text}
	    </div>
	  )
	}
}
export default Item
