//mport About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#26355D";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
    <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/> 
    {//we passed a function as a property to be used in Navbar Component
    }
    
    <div className="container my-3"><TextFrom heading="Enter text here to analyze" mode = {mode}/></div>
   
   {// <About/> 
   }
    </>
  );
}

export default App;
