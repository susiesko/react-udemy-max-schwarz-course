import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asdf1', name: 'Max', age: 28 },
      { id: 'asdf2', name: 'Manu', age: 29 },
      { id: 'asdf3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({persons: [
      { id: 'asdf1', name: newName, age: 28 },
      { id: 'asdf2', name: 'Manu', age: 29 },
      { id: 'asdf3', name: 'Stephanie', age: 27 }
    ]});
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    const persons = [ ...this.state.persons ];
    persons[personIndex] = person;

    person.name = event.target.value;
    this.setState({ persons: persons });

    /* this.setState({persons: [
      { id: 'asdf1', name: 'Max', age: 28 },
      { id: 'asdf2', name: event.target.value, age: 29 },
      { id: 'asdf3', name: 'Stephanie', age: 27 }
    ]}); */
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); // returns a new copy of the array rather than referencing the original object
    const persons = [...this.state.persons]; // use spread operator to create a new copy of the array
    persons.splice(personIndex, 1);    
    this.setState({ persons: persons });
  };

  togglePersonsHandler = (event) => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    const style = {
      color: 'white',
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      borderRadius: '5px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangeHandler(event, person.id)}/>
            );
          })}
        </div>        
      );
      
      style.backgroundColor = 'darkred';
    }
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { persons }
      </div>
    );
  }
}

export default App;
