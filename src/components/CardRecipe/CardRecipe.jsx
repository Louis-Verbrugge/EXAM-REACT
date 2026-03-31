import React from 'react';
import styles from './CardRecipe.module.scss';
import { useNavigate } from 'react-router-dom';

const CardRecipe = ({recipe, isFavorite, onToggleFav}) => {
    const navigate = useNavigate();
    return (
        <div className={styles.card}>
            <h2>{recipe.name}</h2>
            <p>{recipe.cuisine}</p>
            <img src={recipe.image} alt={recipe.name} />

            <div className={styles.blockButton}>
                <button onClick={() => navigate(`/recipes/${recipe.id}`)}>
                    View Recipe
                </button>
                <button onClick={() => onToggleFav(recipe.id)}>
                    {isFavorite ? '❤️' : '🤍'}
                </button>
            </div>
        </div>
    );
};

export default CardRecipe;