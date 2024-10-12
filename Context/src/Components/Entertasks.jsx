import React, { useState } from 'react'

const Entertasks = ({handleaddbtn}) => {
    const [addsubject,setaddsubject]=useState("")
    const [adddate,setadddate]=useState("")

    const handlesubject=(event)=>{
        setaddsubject(event.target.value);
        

    }
    const handledate=(event)=>{
        setadddate(event.target.value);
        

    }
    const addsubdatebtn=()=>{
        handleaddbtn(addsubject,adddate)
        setaddsubject("")
        setadddate("")
    }
  return (
    <>
     <div className="container mt-4 align-items-center">
      <h2 className="text-center mb-4">Add New Todo</h2>
      <div className="form-row flex-d align-items-center">
        <div className="col-md-5 mb-3">
        <input type='text' value={addsubject} onChange={handlesubject} /></div>
        <div className="col-md-4 mb-3">
        <input type='date' value={adddate} onChange={handledate}  /></div>
        <div className="col-md-3">
        <button onClick={addsubdatebtn}  type="button" className="btn btn-primary btn-sm">Add</button>
        </div>
        </div>
        </div>
    </>
  )
}

export default Entertasks