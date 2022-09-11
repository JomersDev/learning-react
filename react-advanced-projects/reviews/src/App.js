import './App.css';
import React from 'react';
import Review from './Review';
import { people } from './people';

function App() {

  //state initally set the array imported from people.js
  const [personArray, setPersonArray] = React.useState(people)
  const [count, setCount] = React.useState(0)

  //increment count and check if end of array has been reached (3) then loop back to the start
  function incrementCount() {
    setCount(prevCount => count !== 3 ? prevCount + 1 : 0)
  }

  //decrement count and check if start of array has been reached (0) then loop back to the end
  function decrementCount() {
    setCount(prevCount => count !== 0 ? prevCount - 1 : 3)
  }

  //function that randomly generates a value for count
  function randomCount() {
    setCount(Math.floor(Math.random() * (3 + 1)))
  }

  //using the count variable a person element is rendered from the personArray state
  const renderedPerson = <Review 
                            key={personArray[count].id} 
                            img={personArray[count].img} 
                            name={personArray[count].name} 
                            role={personArray[count].role}
                            para={personArray[count].para}
                            incrementCount = {incrementCount}
                            decrementCount = {decrementCount}
                            randomCount = {randomCount}
                          />

  return (
    <div className="App">
      <h1 className='title'>Our Reviews</h1>
      {renderedPerson}
    </div>
  );
}

export default App;
