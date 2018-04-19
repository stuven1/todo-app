import React from "react"
import Form from "./form"
import Item from "./item"

class App extends React.Component {
  constructor(props) {
    super(props)
    const toDoList = JSON.parse(localStorage.getItem("toDo"))
    // getItem ligger i constructorn. Där sätts initalstate. //
    // Vid första render så visas endast array med items. //
    // Med vid uppdatering så sparas den nya "toDo" i localStorage. //
    // med hjälp utav -> localStorage.removeItem("toDo") kan localStorage återställas. //
    if (toDoList) {
      this.state = { items: toDoList }
    } else {
      this.state = {
        items: [
          { id: 1, done: false, text: "Go for a run!" },
          { id: 2, done: false, text: "Water the plants!" }
        ]
      }
    }
  }

	handleNewToDo = (text) => {
	  const toDos = this.state.items
	  toDos.push({ id: Date.now(), done: false, text }) // Lägg till localeStorage innan nytt state. //
	  localStorage.setItem("toDo", JSON.stringify(toDos)) // Hanterar arrayan toDos, sparas i localStorage.
	  this.setState({
	    items: toDos
	  })
	}

	handleChecking = (index) => {
	  const toDos = this.state.items // spara nuvarande array //
	  toDos[index].done = !toDos[index].done // tar ut indexet ur arrayen, ! betyder att den gör motsattsen. //
	  this.setState({
	    items: toDos // den nya, uppdaterade arrayen.
	  })
	}

	render() {
	  return (
	    <div>
	      <h1>my to do list</h1>
	      <Form addToList={this.handleNewToDo} />

	      {this.state.items.map((listItem, index) => (
	        <Item
  key={listItem.id}
  text={listItem.text}
  done={listItem.done}
  function={this.handleChecking}
  index={index} />
	      ))}
	    </div>
	  )
	}
}

export default App
