import React from 'react';
import '../styles/Contador.css'

export class Contador extends React.Component {
  render () {
    return(
      <div className="contador">
        {this.props.numClick}
      </div>
     )
  }
}
