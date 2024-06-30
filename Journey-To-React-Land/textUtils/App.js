//mport About from "./components/About";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null); // set intial state to null
  const [title, setTitle] = useState('');
  

  const updateTitle= (msg) =>{
    setTitle(msg)
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#26355D";
      updateTitle("TextUtils - Light Mode")
      document.title = title;
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      updateTitle("TextUtils - Dark Mode")
      document.title = title;
      showAlert("Light Mode has been enabled", "success");
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }

  return (
    <>
    <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/> 
    {//we passed a function as a property to be used in Navbar Component
    }
    <Alerts alert={alert}/>
    
    <div className="container my-3"><TextFrom heading="Enter text here to analyze" showAlert = {showAlert}mode = {mode}/></div>
   
   {// <About/> 
   }
    </>
  );
}

export default App;
