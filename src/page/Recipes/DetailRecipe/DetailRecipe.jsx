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
        <div>
            <h1>Product id : {id}</h1>
            <h2>path : {JSON.stringify(recipe)}</h2>
            <p>name {recipe.name}</p>
            <p>ingredients {recipe.ingredients}</p>
            <p>instructions {recipe.instructions}</p>
            <p>preparation time {recipe.prepTimeMinutes}</p>
            <p>cooking time {recipe.cookTimeMinutes}</p>
            <p>number of servings {recipe.servings}</p>
            <p>difficulty {recipe.difficulty}</p>
            <p>calories {recipe.caloriesPerServing}</p>
            <p>tags {recipe.tags}</p>
            <p>image {recipe.image}</p>
            <p>rating {recipe.rating}</p>
            <p>review count {recipe.reviewCount}</p>
            <p>type of meal {recipe.mealType}</p>

        </div>
    );
};

export default DetailRecipe;