import React, { Component } from 'react';

// const withClass = (WrapperComponent, className) => {
//   // never change the Component in this place
//   // use the ES6 Spread operator instead
//   return (props) => (
//     <div className={className}>
//       <WrapperComponent {...props} />
//     </div>
//   )
// }

const withClass = ( WrapperComponent, className ) => {
  return class extends Component {
    render () {
      return (
        <div className={className}>
        <WrapperComponent {...this.props} />
        </div>
      );
    }
  }
}

export default withClass;
