
import { useState } from 'react'
import {BrowerRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowerRouter>
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
      </Routes>
    </BrowerRouter>
  )
}

export default App
