import React from 'react';
import styles from './CardRecipe.module.scss';
import { useNavigate } from 'react-router-dom';

const CardRecipe = ({recipe}) => {
    return (
        <div className={styles.card} onClick={() => navigate(`/recipes/${recipe.id}`)}>
            <h2>{recipe.name}</h2>
            <p>{recipe.cuisine}</p>
            <img src={recipe.image} alt={recipe.name} />
            <button onClick={() => onToggleFav(recipe.id)}>
                {isFavorite ? '❤️' : '🤍'}
            </button>
        </div>
    );
};

export default CardRecipe;