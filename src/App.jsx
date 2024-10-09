import { useState } from 'react'

import './App.css'
import Calculator from './Components/Calculator'
import Input from "./Components/Input"
import Button from "./Components/Button"
function App() {
  const btn=["C","1","2","+","3","4","-","5","6","*","7","8","/","9","0",".","="]
  const [inputval,setinputval]=useState("")
  const onbtnclick=(buttontext)=>{
    console.log(buttontext);
    if(buttontext==="C"){
      setinputval("")

    }else if(buttontext==="="){
      const result=eval(inputval)
      setinputval(result)

    }else{
      const newdispvalue=inputval+buttontext;
      setinputval(newdispvalue)
    }
    

  }

  return (
    <>
    
    <Input displayval={inputval}></Input>
    <Button inputbtn={btn} onbtnclick={onbtnclick}></Button>
   
    
    </>
  )
}

export default App
