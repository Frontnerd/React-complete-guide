import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import { AuthContext } from '../../../containers/App';


class Person extends Component {
  // CONSTRUCTOR
  constructor(props) {
    super(props);
    console.log("  1 person *********");
    this.inputElement = React.createRef();
  }
  //
  componentWillMount () {
    console.log("  2 person componentWillMount");
  }
  //
  componentDidMount () {
    console.log("  4 person componentDidMount");
  }

  focus() {
    this.inputElement.current.focus();
  }

  render () {
    console.log("  3 person RENDER");
    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => auth ? <p>!! Authenticated !!</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>I am a {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </Aux>
    )
  }
}

// validate props using PropTypes
Person.propTypes = {
  click:  PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
