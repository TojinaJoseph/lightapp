
import React from 'react'
import { useState } from 'react';
import wlight from './white.png';
import ylight from './orange.png';
import './light.css'

const Onlight = () => {
    
let [light, setLight] = useState("on");
// let [light, setLight] = useState("on");


let changelight = ()=>{
    
    setLight("off");
   
}

let changemlight = ()=>{
    
    setLight("on");
   
}

if(light=="on"){
    return (
        <div>
          
          <img src={wlight}/><br/>
          <button onClick={changelight}>{light}</button>
        </div>
    )
}
 else{
    return (
        <div>
        
        <img src={ylight}/><br/>
          <button onClick={changemlight}>{light}</button>  
        </div>
    )
 }  
}



export default Onlight
