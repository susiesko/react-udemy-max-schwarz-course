import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';

import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  };

  switchNameHandler = () => {
    console.log('test');

    // let tempState = {};
    // Object.assign(tempState, this.state);

    // tempState.persons[0].name = 'Susie';
    // tempState.persons[0].age = 34;

    // this.setState(tempState);
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          <p>My Hobbies: Racing</p>
          <p>I am cool</p>          
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
