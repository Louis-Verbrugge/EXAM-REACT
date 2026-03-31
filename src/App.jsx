
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favorite from './page/Favorite/Favorite';
import AllRecipes from './page/Recipes/AllRecipes/AllRecipes';
import DetailRecipe from './page/Recipes/DetailRecipe/DetailRecipe';
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
