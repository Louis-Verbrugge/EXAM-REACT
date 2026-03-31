import React, { useState } from 'react';
import styles from './BlockCardRecipe.module.scss';
import CardRecipe from '../CardRecipe/CardRecipe';
import { getFavorites, toggleFavorite } from '../../services/favoriteService';

const BlockCardRecipe = ({allRecipes}) => {
    const [favs, setFavs] = useState(getFavorites());

    return (
        <div className={styles.blockCardRecipe}>
            {allRecipes && allRecipes.map((recipe) => {
                const isFavorite = favs.includes(recipe.id);
                
                const handleToggle = () => {
                    toggleFavorite(recipe.id);
                    setFavs(getFavorites());
                };

                return (
                    <CardRecipe 
                        key={recipe.id} 
                        recipe={recipe} 
                        isFavorite={isFavorite} 
                        onToggleFav={handleToggle}
                    />
                );
            })}
        </div>
    );
};

export default BlockCardRecipe;