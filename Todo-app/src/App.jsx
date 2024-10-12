import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from "./Components/Input"
import Listitems from './Components/Listitems'
import Welcome from './Components/Welcome'
function App() {
  
  // const initiallistitems=[{name:"Ghee",
  //   duedate:"22/10/22",
  // },
  // {
  //   name:"oil",
  //   duedate:"20/10/22",
  // }

  // ];
  const [todoitems,settodoitems]=useState([])
  const handlenewlistitems=(itemname,itemduedate)=>{
    console.log(`the name is :${itemname} and date:${itemduedate}`);
    const newtodoitems=[...todoitems,{name:itemname,duedate:itemduedate}];
    settodoitems(newtodoitems);

  }
  const handledelbtnclick=(delitemname)=>{
    const newtodoitems=todoitems.filter((items)=> items.name!==delitemname)
    settodoitems(newtodoitems)
    console.log(`Deleted item is :${delitemname}`);
    
  }
  return (
    <>
   
      <Input onnewitems={handlenewlistitems}></Input>
      {todoitems.length===0 && <Welcome></Welcome> } 
      <Listitems delbtnclicked={handledelbtnclick} Listitems={todoitems}></Listitems>
     
      
    </>
  )
}

export default App
