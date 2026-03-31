import React, { useState } from 'react';
import styles from './DetailRecipe.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios";
import { getData } from '../../../services/api/get';

const DetailRecipe = ({ }) => {

    const { id } = useParams();

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const data = await getData(`recipes/${id}`);
                console.log("datadatadatadata")
                console.log(data)
                setRecipe(data);

            } catch (err) {
                console.log("Failed to fetch recipes");
            }
        }
        fetchRecipes();
    }, [])

    useEffect(() => {
        console.log("recipe");
        console.log(recipe);
    }, [recipe])


    return (
        <div className={styles.pageDetailRecipe}>
            <h1>{recipe.name}</h1>
            <img src={recipe.image}></img>

            <div className={styles.ingre_recette}>
                <h2>Ingredients :</h2>
                {
                    recipe.ingredients && recipe.ingredients.map((item, index) => {
                        return (
                            <p>{item}</p>
                        );
                    })
                }
            </div>
            <div className={styles.prepa_recette}>
                <h2>Preparation :</h2>
                {
                    recipe.instructions && recipe.instructions.map((item, index) => {
                        return (
                            <p>{item}</p>
                        );
                    })
                }
            </div>


            <div className={styles.infos_recette}>
                <h2>Infos :</h2>
                <p>preparation time : {recipe.prepTimeMinutes} min</p>
                <p>cooking time : {recipe.cookTimeMinutes} min</p>
                <p>number of servings : {recipe.servings}</p>
                <p>difficulty : {recipe.difficulty}</p>
                <p>calories : {recipe.caloriesPerServing}</p>
                <p>tags :</p>
                {
                    recipe.tags && recipe.tags.map((item, index) => {
                        return (
                            <p>{item}</p>
                        );
                    })
                }
                <p>rating : {recipe.rating}</p>
                <p>review count : {recipe.reviewCount}</p>
                <p>type of meal : {recipe.mealType}</p>
            </div>


        </div>
    );
};

export default DetailRecipe;