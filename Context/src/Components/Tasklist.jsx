import React from 'react'

const Tasklist = ({todotasks}) => {
  return (
    <>
    {
        todotasks.map((task,index)=>(
            <ul key={index}>
                
                <li >{task.subject}{task.Date}</li>
                
                
            </ul>

        ))
    }
    </>
  )
}

export default Tasklist