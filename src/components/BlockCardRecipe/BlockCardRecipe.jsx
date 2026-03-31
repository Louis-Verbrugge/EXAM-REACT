import React from 'react';
import styles from './BlockCardRecipe.module.scss';
import CardRecipe from '../CardRecipe/CardRecipe';

const BlockCardRecipe = ({allRecipes}) => {
    return (
        <div className={styles.blockCardRecipe}>
            {allRecipes && allRecipes.map((recipe, index) => {
                return (
                    <CardRecipe key={`blockCardRecipe_${index}`} recipe={recipe} />
                );
            })}
        </div>
    );
};

export default BlockCardRecipe;