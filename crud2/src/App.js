

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import About from "./About";
import Home from "./Home";
import Edit from "./Edit";
import Add from "./Add";

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/create" element={<Add/>}/>
        <Route path="/edit" element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
   
    </>
   
  );
}

export default App;
