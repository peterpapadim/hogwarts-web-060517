import React from 'react';

class Pig extends React.Component{

  constructor(){
    super();
    this.state={
      displayPigData: false,
      displayCard: true
    }
  }

  pigImage = () => {
    let pigName = this.props.name.replace(/\s/g, '_') + '.jpg'
    return `./hog-imgs/${pigName}`
  }

  greased = () => {
    return this.props.greased ? "Yes" : "No"
  }

  handleClick = (event) => {
    this.setState({
      displayPigData: !(this.state.displayPigData)
    })
  }

  handleHideClick = (event) => {
    this.setState({
      displayCard: !(this.state.displayCard)
    })
  }

  displayContent = (showOrHide) => {
    if (showOrHide){
      return "block"
    }
    else {
      return "none"
    }
  }

  render(){
    return(
    <div>
      <div className="card" style={{display: this.displayContent(this.state.displayCard)}}>
        <div className="image">
          <img src={this.pigImage()}/>
        </div>
        <div className="content" onClick={this.handleClick}>
          <div className="header">{this.props.name}</div>
          <div className="pigData" style={{display: this.displayContent(this.state.displayPigData)}}>
            <p>Specialty: {this.props.specialty}</p>
            <p>Greased: {this.greased()}</p>
            <p>Weight as a ratio: {this.props["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</p>
            <p>Highest Medal Achieved: {this.props['highest medal achieved']}</p>
          </div>
        </div>
      </div>
      <button className="ui button" onClick={this.handleHideClick}>Hide/Show</button><br /><br />
    </div>
    )
  }
}

export default Pig;
