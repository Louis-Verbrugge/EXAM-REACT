import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './AllRecipes.module.scss';
import BlockCardRecipe from '../../../components/BlockCardRecipe/BlockCardRecipe';
import { getData } from '../../../services/api/get';

const AllRecipes = ({}) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [nameInput, setNameInput] = useState("");
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getData('recipes');
                setRecipes(data.recipes ?? []);
            } catch (err) {
                setError("Failed to fetch recipes");
            } finally {;
                setLoading(false);
            }
        }
        fetchRecipes();
    }, [nameInput])

    useEffect(() => {
        console.log("recipes");
        console.log(recipes);
    }, [recipes])

    return (
        <div>
            {
                loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <BlockCardRecipe allRecipes={recipes} />
                )
            }
        </div>
    );
};

export default AllRecipes;