import React from 'react';
import Menu from './Menu';
import './App.css';
import { menuData } from './data';

function App() {

  const[menuItems, setMenuItems] = React.useState(menuData)

  const menuElements = menuItems.map(item => {
    return <Menu key={item.id} title={item.title} img={item.img} price={item.price} description={item.description}/>
  })

  function showAll() {
    setMenuItems(menuData)
  }

  function showBreakfast() {
    setMenuItems(menuData.filter(item => item.category === "breakfast"))
  }

  function showLunch() {
    setMenuItems(menuData.filter(item => item.category === "lunch"))
  }

  function showShakes() {
    setMenuItems(menuData.filter(item => item.category === "shakes"))
  }

  return (
    <div className="app">
        <h1>Our Menu</h1>
        <div className='underline'></div>
        <div className="nav-container">
            <button className="btn" onClick={showAll}>All</button>
            <button className="btn" onClick={showBreakfast}>Breakfast</button>
            <button className="btn" onClick={showLunch}>Lunch</button>
            <button className="btn" onClick={showShakes}>Shakes</button>
        </div>
        <div className='menu-grid'>
          {menuElements}
        </div>
    </div>
  );
}

export default App;
