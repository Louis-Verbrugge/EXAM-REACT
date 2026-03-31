
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favorite from './page/Favorite/Favorite';
import AllRecipes from './page/Recipes/AllRecipes/AllRecipes';
import DetailRecipe from './page/Recipes/DetailRecipe/DetailRecipe';
import './App.css'
import Navbar from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/recipes" element={<AllRecipes />} />
        <Route path="/recipes/:id" element={<DetailRecipe />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
