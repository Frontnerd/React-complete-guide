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
  const WithClass = class extends Component {
    render () {
      return (
        <div className={className}>
          <WrapperComponent ref={this.props.forwardedRef} {...this.props} />
        </div>
      );
    }
  }
  return React.forwardRef(( props, ref ) => {
    return <WithClass {...props} forwardedRef={ref} />
  })
}

export default withClass;
