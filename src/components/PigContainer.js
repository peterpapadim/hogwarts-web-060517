import React from 'react';
import Pig from './Pig'

class PigContainer extends React.Component{

  allPigs = () => {
    return this.props.pigs.map(pig => {return <Pig {...pig}/>})
  }

  render(){

    return(
      <div className="ui link four stackable cards">
        {this.allPigs()}
      </div>
    )
  }
}

export default PigContainer
