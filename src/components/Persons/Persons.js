import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  // CONSTRUCTOR
  constructor(props) {
    super(props);
    console.log("1 CONTRUCTOR PERSONS ======="+props);
    this.lastPersonRef = React.createRef();
  }

  // MOUNT
  componentWillMount () {
    console.log("2 PERSONS ======= componentWillMount");
  }
  componentDidMount () {
    console.log("4 PERSONS ======= componentDidMount");
    this.lastPersonRef.current.focus();
  }

  // UPDATE
  componentWillReceiveProps (nextProps) {
    console.log("UPDATE PERSONS ====== componentWillReceiveProps", nextProps)
  }
  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log("SHOULD UPDATE PERSONS ====== shouldComponentUpdate", nextProps, nextState)
  //   // this checks that there is a difference between persons
  //   // and only RE-RENDER if the text is different
  //   // if non changes no update [test: press Show Persons button twice after loading]
  //   return nextProps.persons !== this.props.persons ||
  //          nextProps.changed !== this.props.changed ||
  //          nextProps.clicked !== this.props.clicked;
  //   // you can decide if continue the UPDATE or not
  //   // return true;
  // }
  conponentWillUpdate () {
    console.log("WILL UPDATE PERSONS ====== conponentWillUpdate")
  }
  componentDidUpdate () {
    console.log("DID UPDATE PERSONS ====== conponentDidUpdate")
  }
  // RENDER
  render () {
    console.log("3 PERSONS ======= inside render")
    return this.props.persons.map(( person, index ) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        position={index}
        age={person.age}
        ref={this.lastPersonRef}
        key={person.id}
        changed={( event ) => this.props.changed(event, person.id)} />;
    } );
  }
}

export default Persons;
