import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  // STATE is only available in components that are extending React componets (App<Component<React)
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





  // METHODS

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
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />;
    }



    // DOM NOW!
    return (
      <div className={classes.App}>
        <Cockpit
          showpersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
