
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/recipes" element={<AllRecipes />} />
        <Route path="/recipes/:id" element={<DetailRecipe />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
