import React from "react"
import "./form.css"

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newToDo: ""
    }
  }

	handleOnChange = (event) => {
	  this.setState({
	    newToDo: event.target.value
	  })
	}

	handleOnSubmit = (event) => {
	  event.preventDefault()
	  this.props.addToList(this.state.newToDo)
	  this.setState({
	    newToDo: ""
	  })
	}

	render() {
	  return (
	    <div>
	      <form onSubmit={this.handleOnSubmit}>
	        <label>
	          <input
  type="text"
  name="toDo"
  value={this.state.newToDo}
  onChange={this.handleOnChange} />
	        </label>
	        <button className="newToDoButton">Add a new to do</button>
	      </form>
	    </div>
	  )
	}
}

export default Form
