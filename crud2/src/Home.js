
import React from 'react'
import DATA from './Data'
import {useNavigate,Link} from 'react-router-dom'
import "./App.css"

function Home() {
  
  let history = useNavigate();
  const handleEdit=(id,name,age)=>{
      localStorage.setItem('Name',name);
      localStorage.setItem('Age',age);
      localStorage.setItem('Id',id);   
  }
  const handleDelete=(id)=>{
    var index =DATA.map(function(e){
      return e.id
    }).indexOf(id);

    DATA.splice(index,1);

    history('/');
  }
   
  return (
  <>
  <div className="container Home">
  <table className="table box">
  <thead>
    <tr>
      {/* <th scope="col">Index</th>  */}
      <th scope="col">NAME</th>
      <th scope="col">AGE</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
 <tbody>
    {
      DATA && DATA.length > 0 ? DATA.map((item,id)=>{
        
       return(
        
          <tr key={id}>
        
        <td >{item.Name}</td>
        <td>{item.Age}</td>
        <td>
          <Link to='/Edit'><button className='btn btn-outline-primary me-2' 
             onChange={()=>handleEdit(item.id,item.Name,item.Age)}>EDIT</button> 
            </Link>
        <button onClick={()=>handleDelete(item.id)} className='btn btn-danger justify-content-center'>DELETE</button>
        </td>
        
        

      </tr>
       
        
       )
      }):"NO ITEMS ARE FOUNDED"
    }
 </tbody>
</table>
<Link to='/create' className='justify-content-center'>
  <button className='btn btn-primary btn-lg disabled ms-5'>CREATE ITEMS</button>
</Link>
  </div>
  
    </>
  )
}

export default Home
