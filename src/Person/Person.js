import React from 'react';
import './Person.css';
import Radium from 'radium';

// const randomNumber = () => {
//     return Math.floor(Math.random() * 30);
// };

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default Radium(person);