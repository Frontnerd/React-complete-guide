import React, {Component} from 'react';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {
  // CONSTRUCTOR
  constructor(props) {
    super(props);
    console.log("  1 person *********")
  }
  //
  componentWillMount () {
    console.log("  2 person componentWillMount");
  }
  //
  componentDidMount () {
    console.log("  4 person componentDidMount");
  }
  render () {
    console.log("  3 person RENDER");
    return (
      <Aux>
        <p onClick={this.props.click}>I am a {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </Aux>
    )
  }
}

export default withClass(Person, classes.Person);
