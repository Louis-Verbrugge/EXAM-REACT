import React from 'react';
import styles from './CardRecipe.module.scss';

const CardRecipe = ({recipe, isFavorite, onToggleFav}) => {
    return (
        <div className={styles.card}>
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