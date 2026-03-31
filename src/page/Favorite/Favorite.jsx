import React, { useState, useEffect } from 'react';
import BlockCardRecipe from '../../components/BlockCardRecipe/BlockCardRecipe';
import { getData } from '../../services/api/get';
import { getFavorites } from '../../services/favoriteService';
import SearchEngine from '../../components/SearchEngine/SearchEngine';

const Favorite = () => {
    const [recipes, setRecipes] = useState([]);


    // all cat, level and time.
    const [allCategories, setAllCategories] = useState([]);
    const [allLevel, setAllLevel] = useState([]);
    const [allTime, setAllTime] = useState([]);

    // input searchBar and selected filters
    const [filteredRecipes, setFilteredRecipes] = useState({
        nameInput: "",
        selectedCategory: "",
        selectedLevel: "",
        selectedTime: ""
    });
    

    useEffect(() => {
        const fetchRecipes = async () => {
            const data = await getData('recipes');
            const allRecipes = data.recipes;
            const favoriteIds = getFavorites(); 

            const filtered = allRecipes.filter(recipe => favoriteIds.includes(recipe.id) && 
                (filteredRecipes.nameInput ? recipe.name.toLowerCase().includes(filteredRecipes.nameInput.toLowerCase()) : true) &&
                (filteredRecipes.selectedCategory ? recipe.cuisine === filteredRecipes.selectedCategory : true) &&
                (filteredRecipes.selectedLevel ? recipe.difficulty === filteredRecipes.selectedLevel : true) &&
                (filteredRecipes.selectedTime ? recipe.prepTimeMinutes.toString() === filteredRecipes.selectedTime : true)
            );

            setAllLevel([...new Set(filtered.map((r) => r.difficulty))] ?? []);
            setAllCategories([...new Set(filtered.map((r) => r.cuisine))] ?? []);
            setAllTime([...new Set(filtered.map((r) => r.prepTimeMinutes))] ?? []);

            setRecipes(filtered);
        };
        fetchRecipes();
    }, [filteredRecipes]);

    return (
        <div>

            <SearchEngine allCategories={allCategories} allLevel={allLevel} allTime={allTime} filteredRecipes={filteredRecipes} setFilteredRecipes={setFilteredRecipes} />
            <h1>Mes Recettes Favorites</h1>
            {recipes.length > 0 ? (
                <BlockCardRecipe allRecipes={recipes} />
            ) : (
                <p>Aucun favori pour le moment. ❤️</p>
            )}
        </div>
    );
};

export default Favorite;