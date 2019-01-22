import React, { PureComponent } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: "iyfr", name:"Manolo", age:"23" },
        { id: "r", name:"Nadia", age:"34" },
        { id: "ir", name:"Camper", age:"12" }
      ],
      otherState: 'different value here',
      showPersons: false
    };
  }

  // MOUNT lifecycle
  componentWillMount() {
    console.log("<< APP WILL MOUNT ====== componentWillMount")
  }
  componentDidMount() {
    console.log("<< APP DID MOUNT ====== componentDidMount")
  }
  // UPDATE lifecycle
  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log("<< APP SHOULD UPDATE ====== shouldComponentUpdate", nextProps, nextState)
  //   // continue only if changes [test: click twice Show Person button after loading app]
  //   return nextState.persons !== this.state.persons ||
  //          nextState.showPersons !== this.state.showPersons;
  // }
  conponentWillUpdate () {
    console.log("<< APP WILL UPDATE ====== conponentWillUpdate")
  }
  componentDidUpdate () {
    console.log("<< APP DID UPDATE ====== conponentDidUpdate")
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
WithClass
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
      <Aux>
        <button onClick={() => (this.setState({showPersons: true}))}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showpersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
