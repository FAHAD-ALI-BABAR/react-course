import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './Components/Container'
import Entertasks from './Components/Entertasks'
import Tasklist from './Components/Tasklist'

function App() {
  
  const Todotasks=[{subject:"maths",Date:"12/10/22"}]
  const [Tasks,settasks]=useState(Todotasks)
  const Handleaddbtn=(subject,Date)=>{
    console.log(`subject is :${subject} and date is :${Date}`);
    const newtasklist=[...Tasks,{subject:subject,Date:Date}]
    settasks(newtasklist);
  }

  return (
    <>
    <Container>
      <Entertasks handleaddbtn={Handleaddbtn}></Entertasks>
      <Tasklist todotasks={Tasks}></Tasklist>
    </Container>
    
      
    </>
  )
}

export default App
