import React,{useState} from 'react'
import DATA from './Data'
import "./App.css"
// import {v4 as uuid} from "uuid-random";
import {v4 as uuidv4} from 'uuid'
import {useNavigate} from 'react-router-dom';

function Add() {
    const [name,setName]=useState("");
    const [age,setAge]=useState("")

    let history=useNavigate();
    const submitHandler=(e)=>{
    e.preventDefault();

const ids=uuidv4();
let uniqueId=ids.slice(0,8); 
 let a=name,
 b=age;

 DATA.push({id:uniqueId,Name:a,Age:b,})
 history("/");

    }
  return (
    <div className='container mt-5 '>
      <div className='box1 add'>
      <div className="mb-3">
  
  <input type="text" className="form-control " id="formGroupExampleInput" placeholder="Plese Enter Your Name" required onChange={(e)=>setName(e.target.value)}/>
</div>
<div className="mb-3">
  
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Your Age " required onChange={(e)=>setAge(e.target.value)}/>
</div>
<button onClick={(e)=>submitHandler(e)} type="submit" className="btn btn-primary" >Submit</button>
   
      </div>
      
  </div>
  )
}

export default Add
