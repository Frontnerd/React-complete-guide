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
      { id: "iyfr", name:"Manolo", age:"23" }, // this.state.persons[0].name
      { id: "r", name:"Nadia", age:"34" },
      { id: "ir", name:"Camper", age:"12" }
    ],
    otherState: 'different value here',
    showPersons: false
  }
  //
  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // make a copy using ES6 Spread operator
    const person = {
      ...this.state.persons[personIndex]
    }

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }
  //
  deletePersonHandler = ( personIndex ) => {
    // fetch all persons and make a copy of the array using slice()
    // const persons = this.state.persons.slice();
    // create a new array with the ES6 Spread operator without mutating the original array
    const persons = [...this.state.persons];
    // removes one element from the array
    persons.splice(personIndex, 1);
    // which was updated by splicing one element?
    this.setState({persons: persons});
  }

  // conditional test handler
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // showPersons equals doesShow is not
    // when this changes the other parts of state (persons and otherState)
    // will just untouched: merged!!
    this.setState({showPersons: !doesShow});
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
    }

    // using javascript for conditional DOM
    // before the return key
    let persons = null;
    if ( this.state.showPersons ) {
      persons = (
        <div>
          {/* map() maps given array elemens into something else*/}
          {this.state.persons.map(( person, index ) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={( event ) => this.nameChangeHandler(event, person.id)} />;
          })}
        </div>
      );
    }

    // DOM
    return (
      <div className="App">
        <h1>Hi this is me in React: boom!</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
            Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
