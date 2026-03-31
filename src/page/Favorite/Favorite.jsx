import React, { useState, useEffect } from 'react';
import BlockCardRecipe from '../../components/BlockCardRecipe/BlockCardRecipe';
import { getData } from '../../services/api/get';
import { getFavorites } from '../../services/favoriteService';

const Favorite = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const data = await getData('recipes');
            const allRecipes = data.recipes;
            const favoriteIds = getFavorites(); 
            const filtered = allRecipes.filter(recipe => favoriteIds.includes(recipe.id));
            setRecipes(filtered);
        };

        fetchRecipes();
    }, []);

    return (
        <div>
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