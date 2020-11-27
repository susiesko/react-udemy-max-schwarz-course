import React, { useEffect } from 'react';
import classes from './Cockpit.module.css'

const Cockpit = ( props ) => {
  useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      // use for http request... etc
      setTimeout(() => {
        //alert('saved data to cloud!');
      }, 1000);

      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect');
      };
    }, 
    // this only runs when props.persons is updated.
    //[props.persons]
    // this only runs when component renders the first time
    []
  );

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');

    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  })

  const assignedClasses = [];

  let btnClasses = 'aaaaa';

  if (props.showPersons){
    btnClasses = classes.Red;
  }

  if (props.personsLength <= 2){
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1){
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }
  
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClasses} onClick={props.clicked}>Toggle Persons</button>            
    </div>
  );
};

export default React.memo(Cockpit);
