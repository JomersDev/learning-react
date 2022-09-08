import './App.css';
import React from 'react';
import Birthday from './Birthday';
import { people } from './people';

function App() {

const [peopleArray, setPeopleArray] = React.useState(people)

const peopleElements = peopleArray.map(person => {
  return <Birthday key={person.id} id={person.id} name={person.name} age={person.age} img={person.img} delete={deleteItem}/>
})

function handleClick() {
  setPeopleArray([])
}

function deleteItem(id) {
  setPeopleArray(prevState => prevState.filter(person => person.id !== id))
}

  return (
      <div className='birthday-container'>
        <h1>{peopleArray.length} Birthday's today</h1>
        {peopleElements}
        <button className='btn' onClick={handleClick}>Clear All</button>
      </div>
  );
}

export default App;
