import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';

class App extends Component {
  // state is only available in components that are extending React componets (App<Component<React)
  // and not in functions components (Person)
  // data resides here
  state = {
    persons: [
      { name:"Manolo", age:"23" }, // this.state.persons[0].name
      { name:"Nadia", age:"34" },
      { name:"Camper", age:"12" }
    ],
    otherState: 'different value here'
  }
  // handler used to switch state
  switchNameHandler = (newName) => {
    // console.log("clicked!")
    // DON`T DO THIS!!! this.state.persons[0].name = "new name";
    this.setState({
      persons: [
        { name: newName, age:"90" },
        { name:"Nadia", age:"34" },
        { name:"Camper", age:"12" }
      ]
    });
  }
  // handler used tu switch state but assigned to a different element/event
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Manolo", age:"90" },
        { name: event.target.value, age:"34" },
        { name: "Camper", age:"12" }
      ]
    });
  }
  // render DOM
  render() {
    // inline styles
    const style = {
      backgroudnColor: "#333",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    // DOM
    return (
      <div className="App">
        <h1>Hi this is me in React: boom!</h1>

        <button
          style={style}
          onClick={() => this.switchNameHandler('CHANGE FROM BUTTON')}>
            Switch First Person Name</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          // passing method reference to different component using Props (click)
          click={this.switchNameHandler.bind(this, 'CHANGE FROM PARAGRAPH')}
          changed={this.nameChangeHandler} >
            Inner html {this.state.otherState}
        </Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
