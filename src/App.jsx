import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Edit from './components/Edit'
import Add from './components/Add'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/add' element={<Add />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
