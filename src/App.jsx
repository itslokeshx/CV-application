import React, { useState } from "react"
import GeneralInfo from "./components/GeneralInfo"
import Education  from "./components/Education"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import LivePreview from "./components/LivePreview"

export default function App(){

 let [general,generalInfo] = React.useState({name:"",mail:"",address:"",summary:""})
 let [education,educationInfo] = React.useState({school:"",degree:"",EdustartDate:"",EduendDate:""})
 let [experience,experienceInfo] = React.useState({company:"",position:"",startDate:"",finalDate:""})
 let [skills,skillsInfo] = React.useState({skillone:"",skilltwo:"",skillthree:""})

    return (
    <>
      <nav className="navbar">
        <h1 className="navbar-title">CV Builder</h1>
      </nav>
     
      <div className="app-container">
        <div className="sidebar">
          <GeneralInfo generalInfo={generalInfo}/>
          <Education educationInfo={educationInfo}/>
          <Experience experienceInfo={experienceInfo}/>
          <Skills skills={skillsInfo}/>
        </div>
        
        <div className="preview-area">
          <h2 className="preview-title">CV Preview</h2>
          <LivePreview 
            name={general.name} 
            mail={general.mail} 
            address={general.address} 
            summary={general.summary}
            school={education.school} 
            degree={education.degree} 
            EdustartDate={education.EdustartDate} 
            EduendDate={education.EduendDate} 
            company={experience.company} 
            position={experience.position} 
            startDate={experience.startDate} 
            finalDate={experience.finalDate}
            skillone={skills.skillone} 
            skilltwo={skills.skilltwo} 
            skillthree={skills.skillthree}
          />
        </div>
      </div>
    </>
    )
}
