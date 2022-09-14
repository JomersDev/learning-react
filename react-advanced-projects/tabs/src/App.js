import React from 'react';
import Experience from './Experience';
import './App.css';
import { experienceData } from "./data"

function App() {
  const [experienceArray, setExperienceArray] = React.useState(experienceData.filter(experience => experience.company === "company 1"))

  const experienceRender = experienceArray.map(experience => {
    return <Experience 
            key={experience.id} 
            id={experience.id}
            company={experience.company}
            role={experience.role}
            duration={experience.duration}
            point1={experience.point1}
            point2={experience.point2}
            point3={experience.point3}  
          />
  })

  function showCompany1() {
    setExperienceArray(experienceData.filter(experience => experience.company === "company 1"))
  }

  function showCompany2() {
    setExperienceArray(experienceData.filter(experience => experience.company === "company 2"))
  }

  function showCompany3() {
    setExperienceArray(experienceData.filter(experience => experience.company === "company 3"))
  }

  return (
    <div className="app">
      <h1>Experience</h1>
      <div className='underline'></div>
      <div className="company-selector">
        <button className="company-btn" onClick={showCompany1}>Company 1</button>
        <button className="company-btn" onClick={showCompany2}>Company 2</button>
        <button className="company-btn" onClick={showCompany3}>Company 3</button>
        {experienceRender}
      </div>
    </div>
  );
}

export default App;
