import { useState } from 'react'

import './App.css'
import Education from './screen/Education'
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom'
import Login from './screen/Login'
import Signup from './screen/Signup'
function App() {
  

  return (
    <>
      <BrowserRouter>
  <Routes>
    <Route path="/" element={ <Education/> } />
    <Route path="login" element={ <Login/> } />
    <Route path="register" element={ <Signup/> } />
   
    
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
