import React from 'react'

const Items = () => {
    const itemclicked=()=>{
        console.log("item is clicked");
        
    }
  return (
    <ul>
        <li onClick={itemclicked}>Apple</li>
        <li>mango</li>
        <li>pineapple</li>
        <li>grape</li>
        <li>orange</li>
    </ul>
  )
}

export default Items