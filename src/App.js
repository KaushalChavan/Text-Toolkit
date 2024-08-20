import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {

const [mode , setMode] = useState("light")
const [alert , setAlert] = useState(null)
  
const showAlert = (message,type) =>{
   setAlert({
    msg: message,
    type: type
   })

   setTimeout(()=>{
      setAlert(null);
   },1500)
}

const toggleMode = () =>{
   
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = '#001f48'
      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.background = 'white'
      showAlert("Light Mode has been enabled", "success")
    } 
} 

  return (
    <>
    <Router>
    <Navbar title='Text Toolkit' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
          <Route path="/about" element={<About mode={mode} toggleMode={toggleMode}/>}/>
        
          <Route path="/" element={ <TextForm heading='Enter Your Text :' mode={mode} showAlert={showAlert}/>}/>
   </Routes>
   </div>
   </Router>
    </>
  );
}

export default App;
