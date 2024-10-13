import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './Components/Container'
import Entertasks from './Components/Entertasks'
import Tasklist from './Components/Tasklist'

const newitemreducermethod=(newtodoitems,action)=>{
  let handlenewaddeditems=newtodoitems;
  if(action.type==="New_items"){
    
    handlenewaddeditems=[...newtodoitems,
      {
      itemname: action.payload.itemname,
      duedate: action.payload.duedate
    }]

  }
  else if(action.type=="Del_items"){
   handlenewaddeditems=newtodoitems.filter((item)=> item.itemname!==action.payload.itemname) 
  }
 
  return handlenewaddeditems;

}
function App() {

  const [newitem,dispatchnewitem]=useReducer(newitemreducermethod,[]);
  const Handleaddbtn=(itemname,duedate)=>{
    const newtodoitems={
      type:"New_items",
      payload:{
        itemname,
        duedate,
      }
    }
    dispatchnewitem(newtodoitems)

  }
  const handledelbtn=(itemname)=>{
    const newdelitems={
      type:"Del_items",
      payload:{
        itemname:itemname,
      }
    }
    dispatchnewitem(newdelitems)

  }
  
  // const Todotasks=[{subject:"maths",Date:"12/10/22"}]
  // const [Tasks,settasks]=useState(Todotasks)
  // const Handleaddbtn=(subject,Date)=>{
  //   console.log(`subject is :${subject} and date is :${Date}`);
  //   const newtasklist=[...Tasks,{subject:subject,Date:Date}]
  //   settasks(newtasklist);
  // }
  // const handledeltask=(delsubject)=>{
  //   console.log(`Deleted subject si :${delsubject} `);
  //   const updatedlistitems=Tasks.filter((subjects)=> subjects.subject!==delsubject)
  //   settasks(updatedlistitems);
  //   console.log(`Deleted item is ${delsubject} `);
    

  //   }
    

  

  return (
    <>
    <Container>
      <Entertasks handleaddbtn={Handleaddbtn}></Entertasks>
      <Tasklist todotasks={newitem} handledelbtn={handledelbtn} ></Tasklist>
    </Container>
    
      
    </>
  )
}

export default App
