import React from 'react'
import NavBar from './Components/NavBar'
import Body from './Components/Body'
import { Route, Routes } from 'react-router-dom'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Sports from './Pages/Sports'
import New from './Pages/New'
import Sales from './Pages/Sales'
import Kids from './Pages/Kids'
import Card from './Components/Card'

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Body/>} />
      <Route path='/men' element={<Men/>} />
      <Route path='/women' element={<Women/>} />
      <Route path='/kids' element={<Kids/>} />
      <Route path='/sports' element={<Sports/>} />
      <Route path='/new' element={<New/>} />
      <Route path='/sales' element={<Sales/>} />
      <Route path='/shoe' element={<Card/>} />



    </Routes>
    </>
  )
}

export default App