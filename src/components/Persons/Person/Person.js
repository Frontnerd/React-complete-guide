import React from 'react';
import classes from './Person.module.css';

// States changes are made in the App (which is a class component)
// Props are the way to access data from outside
// and shoult stay as simple as possible for usability reasons
const person = ( props ) => {
  return (
    <div className={classes.Person}>
      {/* you can`t acces event handles in this file
          you have to use props instead (props.click) */}
      <p onClick={props.click}>I am a {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      { /* onChange represend a second way to bind */ }
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
}

export default person;
