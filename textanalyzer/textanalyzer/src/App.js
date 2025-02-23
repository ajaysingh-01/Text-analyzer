import './App.css'; 
import Navbar from './Component/Navbar'; 
import TextForm from './Component/TextFrom'; 
import React, { useState } from 'react';  
function App() { 
  const [mode, setMode] = useState('light'); 
 
  const toggleMode = ()=>{ 
    if(mode === 'light'){ 
      setMode('dark'); 
      document.body.style.backgroundColor = '#042743'; 
    } 
    else{ 
      setMode('light'); 
      document.body.style.backgroundColor = 'white'; 
    } 
  } 
  return ( 
    <> 
    {/* <Navbar title="Text-Analyzer App" aboutText="About Text-Analyzer App" /> */} 
    {/* <Navbar/> */} 
    <Navbar title="Text-Analyzer App" mode={mode} toggleMode={toggleMode} /> 
    <div className="container my-3"> 
    <TextForm heading="Enter the text to analyze below" mode={mode}/> 
    </div> 
    </>  
  ); 
} 
 
export default App; 