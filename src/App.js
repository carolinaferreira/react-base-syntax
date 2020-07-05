import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';

class App extends Component {
  state = {
    persons: [
      {name: 'Pam'},
      {name: 'Dwight'},
      {name: 'Jim'},
    ]
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value},
        {name: event.target.value},
        {name: event.target.value}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.nameChangeHandler}
          startingName={this.state.persons[0].name}/>
        <UserOutput
          name={this.state.persons[0].name}/>
        <UserOutput
          name={this.state.persons[1].name}/>
        <UserOutput
          name={this.state.persons[2].name}/>
      </div>
    );
  }
}

export default App;
