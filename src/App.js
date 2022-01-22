import logo from './logo.svg';
import './App.css';
import Onlight from './component/onlight';
import Offlight from './component/offlight';
import Header from './component/header';
import { useState } from 'react';

function App() {
  

  return (
    <div className="App"> 
    <Header/>
    <div className="cont">
    <Onlight/>
    <Offlight/>
    </div>
    </div>
  );
}

export default App;
