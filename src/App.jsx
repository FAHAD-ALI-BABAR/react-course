import { useState } from 'react'

import './App.css'
import Head from "./Components/Head"
import Items from "./Components/Items"
import Container from './Components/Container'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
      <Head></Head>
      <Items></Items>
      </Container>
    </>
  )
}

export default App
