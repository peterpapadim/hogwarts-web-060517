import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import PigContainer from './components/PigContainer'
import Hogs from './porkers_data'

class App extends Component {

  constructor(){
    super();
    this.state={
      hogs: Hogs
    }
  }

  handleChange = (event) => {
    let selection = event.target.value
    switch (selection){
      case "Name":
        this.setState({
          hogs: this.state.hogs.sort((hog1, hog2) => {
            if (hog1.name < hog2.name){
              return -1
            }
            if (hog1.name > hog2.name){
              return 1
            }
            return 0
          })
        })
        break
      case "Weight":
        this.setState({
          hogs: this.state.hogs.sort((hog1, hog2) => {
            let hog1Weight = hog1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
            let hog2Weight = hog2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
            return hog1Weight - hog2Weight
          }).reverse()
        })

        break
      case "Greased":
        this.setState({
          hogs: Hogs.filter((hog) => {
            return hog.greased
          })
        })
        break
      case "Ungreased":
      this.setState({
        hogs: Hogs.filter((hog) => {
          return !(hog.greased)
        })
      })
        break
      default:
        this.setState({hogs: Hogs})
        break
    }
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <select className="ui dropdown" onChange={this.handleChange}>
            <option value="">Sort By</option>
            <option value="Name">Name</option>
            <option value="Weight">Weight</option>
          </select>
          <select className="ui dropdown" onChange={this.handleChange}>
            <option value="">Filter By</option>
            <option value="Greased">Greased</option>
            <option value="Ungreased">Ungreased</option>
          </select><br /><br />
          <PigContainer pigs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
