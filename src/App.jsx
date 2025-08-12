import Input from "./components/UserInput"
import Output from "./components/Preview"
import React, { useState } from "react"
import UserInput from "./components/UserInput"
import Preview from "./components/Preview"

export default function App(){

 let [input,liveinput] = React.useState({name:""})

   

    return (
    <>
    <UserInput liveinput={liveinput}/>
    <Preview name={input.name}/>
  
    </>
    
    )
}