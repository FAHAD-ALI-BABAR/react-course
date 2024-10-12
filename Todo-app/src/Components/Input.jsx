import React, { useState } from 'react'

const Input = ({onnewitems}) => {
    const[itemname,setitemname]=useState("");
    const[itemdate,setitemdate]=useState("");
    const handleitemnamechange=(event)=>{
        // console.log(event.target.value);
        setitemname(event.target.value)
        

    }
    const handleitemdatechange=(event)=>{
        // console.log(event.target.value);
        setitemdate(event.target.value)
    }
    const handleaddbtnclicked=()=>{
        onnewitems(itemname,itemdate)
        setitemdate("");
        setitemname("");
    }
  return (
    <>
    <div className="container mt-4 align-items-center">
      <h2 className="text-center mb-4">Add New Todo</h2>
      <div className="form-row align-items-center">
        <div className="col-md-5 mb-3">
        <input type='text' value={itemname} onChange={handleitemnamechange}/></div>
        <div className="col-md-4 mb-3">
        <input type='date' value={itemdate} onChange={handleitemdatechange}/></div>
        <div className="col-md-3">
        <button onClick={handleaddbtnclicked} type="button" className="btn btn-primary btn-sm">Add</button>
        </div>
        </div>
        </div>
        
    
    </>
  )
}

export default Input