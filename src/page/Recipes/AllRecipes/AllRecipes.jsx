import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './AllRecipes.module.scss';
import BlockCardRecipe from '../../../components/BlockCardRecipe/BlockCardRecipe';
import { getData } from '../../../services/api/get';
import SearchEngine from '../../../components/SearchEngine/SearchEngine';

import Loading from '../../../components/Loading/Loading';

const AllRecipes = ({}) => {

    // all cat, level and time.
    const [allCategories, setAllCategories] = useState([]);
    const [allLevel, setAllLevel] = useState([]);
    const [allTime, setAllTime] = useState([]);

    // loading and error and all recipes
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // input searchBar and selected filters
    const [filteredRecipes, setFilteredRecipes] = useState({
        nameInput: "",
        selectedCategory: "",
        selectedLevel: "",
        selectedTime: ""
    });

    

    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await getData(`recipes/search?q=${filteredRecipes.nameInput}`);

                const filteredData = data.recipes.filter((recipe) => {
                    const matchCategory = filteredRecipes.selectedCategory ? recipe.cuisine === filteredRecipes.selectedCategory : true;
                    const matchLevel = filteredRecipes.selectedLevel ? recipe.difficulty === filteredRecipes.selectedLevel : true;
                    const matchTime = filteredRecipes.selectedTime ? recipe.prepTimeMinutes.toString() === filteredRecipes.selectedTime : true;
                    return matchCategory && matchLevel && matchTime;
                });

                setRecipes(filteredData);
                allCategories != null ? setAllCategories([...new Set(data.recipes.map((r) => r.cuisine))] ?? []) : null;
                allLevel != null ? setAllLevel([...new Set(data.recipes.map((r) => r.difficulty))] ?? []) : null;
                allTime != null ? setAllTime([...new Set(data.recipes.map((r) => r.prepTimeMinutes))] ?? []) : null;
            } catch (err) {
                setError("Failed to fetch recipes");
            } finally {;
                setLoading(false);
            }
        }
        fetchRecipes();
    }, [filteredRecipes]);

    return (
        <div>
            <SearchEngine allCategories={allCategories} allLevel={allLevel} allTime={allTime} filteredRecipes={filteredRecipes} setFilteredRecipes={setFilteredRecipes} />
            {
                loading ? (
                    <Loading />
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