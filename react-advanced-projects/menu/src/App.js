import React from 'react';
import Menu from './Menu';
import Nav from './Nav';
import './App.css';
import { menuData } from './data';

function App() {

  const[menuItems, setMenuItems] = React.useState(menuData)

  const menuElements = menuItems.map(item => {
    return <Menu title={item.title} img={item.img} price={item.price} description={item.description}/>
  })

  return (
    <div className="app">
        <h1>Our Menu</h1>
        <div className='underline'></div>
        <Nav />
        {menuElements}
    </div>
  );
}

export default App;
