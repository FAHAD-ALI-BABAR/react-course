import React, { useState } from 'react'

const Tasklist = ({todotasks,handledelbtn}) => {
   
  return (
    <>
    {
        todotasks.map((task,index)=>(
            <ul key={index}>
                
                <li >{task.itemname}</li>
                <li >{task.duedate}</li>
                <button onClick={()=>handledelbtn(task.itemname)} className='btn btn-danger'>Delete</button>
                
                
            </ul>


        ))
    }
    </>
  )
}

export default Tasklist