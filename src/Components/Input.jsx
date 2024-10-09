import React from 'react'

const Input = (props) => {
  return (
    <>
    <input type='text' placeholder='Enter data' value={props.displayval} readOnly/>
    </>
  )
}

export default Input