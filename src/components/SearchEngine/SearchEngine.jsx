import React, { use, useEffect } from 'react';
import styles from './SearchEngine.module.scss';

const SearchEngine = ( { allCategories, allLevel, allTime, filteredRecipes, setFilteredRecipes } ) => {

    useEffect(() => {
        console.log("SearchEngine rendered");
        console.log(filteredRecipes);
    }, [filteredRecipes]);

    return (
        <div className={styles.searchEngine}>
            <input type="text" placeholder="Search recipes..." value={filteredRecipes.nameInput} onChange={(e) => {
                setFilteredRecipes((preview) => {
                    return {...preview, nameInput: e.target.value}
                })
            }}/>

            <div className={styles.blockButton}>

                <select name="Category" id="searchBy" value={filteredRecipes.selectedCategory} onChange={(e) => {
                    setFilteredRecipes((preview) => {
                        return {...preview, selectedCategory: e.target.value}
                    })
                }}>
                    <option value="">All Categories</option>
                    {allCategories && allCategories.map((category, index) => (
                        <option key={`Category_${index}`} value={category}>{category}</option>
                    ))}
                    {
                        // je test si le Categories est dans allLevel, si oui je l'affiche sinon je ne l'affiche pas
                        filteredRecipes.selectedCategory && !allCategories.includes(filteredRecipes.selectedCategory) ? (
                            <option value={filteredRecipes.selectedCategory}>{filteredRecipes.selectedCategory}</option>
                        ) : null
                    }
                </select>
                <select name="Level" id="searchBy" value={filteredRecipes.selectedLevel} onChange={(e) => {
                    setFilteredRecipes((preview) => {
                        return {... preview, selectedLevel: e.target.value}
                    })
                }}>
                    <option value="">All Levels</option>
                    {allLevel && allLevel.map((level, index) => (
                        <option key={`Level_${index}`} value={level}>{level}</option>
                    ))}
                    {
                        // je test si le level est dans allLevel, si oui je l'affiche sinon je ne l'affiche pas
                        filteredRecipes.selectedLevel && !allLevel.includes(filteredRecipes.selectedLevel) ? (
                            <option value={filteredRecipes.selectedLevel}>{filteredRecipes.selectedLevel}</option>
                        ) : null
                    }
                </select>

                <select name="Time" id="searchBy" value={filteredRecipes.selectedTime} onChange={(e) => {
                    setFilteredRecipes((preview) => {
                        return {...preview, selectedTime: e.target.value}
                    })
                }}>
                    <option value="">All Times</option>
                    {allTime && allTime.map((time, index) => (
                        <option key={`Time_${index}`} value={time}>{time}</option>
                    ))}
                    {
                        // je test si le time est dans allTime, si oui je l'affiche sinon je ne l'affiche pas
                        filteredRecipes.selectedTime && !allTime.includes(filteredRecipes.selectedTime) ? (
                            <option value={filteredRecipes.selectedTime}>{filteredRecipes.selectedTime}</option>
                        ) : null
                    }
                </select>

            </div>
        </div>
    );
};

export default SearchEngine;