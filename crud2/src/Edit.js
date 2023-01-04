import React,{useEffect, useState} from 'react'
import DATA from './Data'
// import {v4 as uuid} from "uuid";
//import {v4 as uuid} from "uuid-random"
import "./App.css"
import {
  useNavigate} from 'react-router-dom'

function Edit() {
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const [id,setId]=useState("")
  // const [editid,setEditId]=useState(null)
  let history = useNavigate()
  var index=DATA.map(function(e){
    return e.id
  }).indexOf(id);
  const handleEdit=(e)=>{
    e.preventDefault();
     let a=DATA[index];
    a.Name = name;
    a.Age = age;
  
    history("/");
  }
   useEffect(()=>{
    setName(localStorage.getItem('Name'))
    setAge(localStorage.getItem('Age'))
    setId(localStorage.getItem('Id'))
   },[])
  return (
    <div className='cantainer'>
      <div className=' mt-5 edit' key={index}>
       <div className="mb-3 box" >
  
  <input type="text" className="form-control" name="name"  id="formGroupExampleInput" placeholder="Plese Enter Your Name" value={name} required  onChange={(e)=>setName(e.target.value)}/>
</div>
<div className="mb-3">
  <input type="text" className="form-control" name="age" id="formGroupExampleInput2" placeholder="Enter Your Age" value={age} required onChange={(e)=>setAge(e.target.value)}/>
</div>
<button onClick={(e)=>handleEdit(e)} type="submit" className="btn btn-primary" >Update</button>
    </div>
  
      
    </div>
  )
}

export default Edit;
