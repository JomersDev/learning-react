import React from 'react'
import './App.css';
import Tour from './Tour';
import { tours } from './tourData';

function App() {
  const [tourArray, setTourArray] = React.useState(tours);
  const [isEmpty, setIsEmpty] = React.useState(false)

  React.useEffect(() => {
    if(tourArray.length === 0) {
      setIsEmpty(true)
    }
  },[tourArray])

  const tourElements = tourArray.map(tour => {
    return (
      <Tour 
        key={tour.id} 
        id={tour.id} 
        title={tour.title} 
        price={tour.price} 
        paragraph={tour.paragraph}
        longPara={tour.longPara} 
        img={tour.img}
        delete={() => removeTour(tour.id)}
      />
    );
  })

  const removeTour = (id) => {
    setTourArray(prevState => prevState.filter(tour => tour.id !== id))
  }

  const refreshArray = () => {
    setTourArray(tours)
    setIsEmpty(false)
  }

  return (
    <div className='wrapper'>
      {isEmpty ? 
      <div>
        <h1>No Tours Left</h1>
        <button className='btn2'onClick={refreshArray}>Refresh</button>
      </div> : 
      <h1 className='wrapper-title'>Our Tours</h1>}
      {tourElements}
    </div>
  );
}

export default App;
