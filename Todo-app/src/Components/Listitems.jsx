import React, { useState } from 'react'

const Listitems = ({Listitems,delbtnclicked}) => {
    
  return (
    <>
    <div className="container mt-4">
    <h2 className="text-center mb-4">Todo List</h2>
      {
        
        Listitems.map((items, index) => (
            
          <div key={index} className="card mb-3 shadow-sm">


            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 className="card-title mb-1">{items.name}</h5>
                <p className="card-text text-muted mb-0">Due: {items.duedate}</p>
              </div>
              <button type="button" className="btn btn-danger btn-sm" onClick={()=>delbtnclicked(items.name)}>Delete</button>
            </div>
          </div>
        ))
      }
    </div>

    </>
  )
}

export default Listitems