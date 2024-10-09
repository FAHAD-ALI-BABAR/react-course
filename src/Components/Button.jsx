import React from 'react'

const Button = (props) => {
  return (
    <div>{
        props.inputbtn.map((btn)=><button key={btn} onClick={()=>props.onbtnclick(btn)}>{btn}</button>)
        }</div>
  )
}

export default Button
