import React from 'react';
import styles from './SearchEngine.module.scss';

const SearchEngine = ( { allCategories, allLevel, allTime, filteredRecipes, setFilteredRecipes } ) => {
    return (
        <div className={styles.searchEngine}>
            <input type="text" placeholder="Search recipes..." value={filteredRecipes.nameInput} onChange={(e) => {
                setFilteredRecipes((preview) => {
                    return {...preview, nameInput: e.target.value}
                })
            }}/>

            <div className={styles.button}>

                <select name="Category" id="searchBy" value={filteredRecipes.selectedCategory} onChange={(e) => {
                    setFilteredRecipes((preview) => {
                        return {...preview, selectedCategory: e.target.value}
                    })
                }}>
                    <option value="">All Categories</option>
                    {allCategories && allCategories.map((category, index) => (
                        <option key={`Category_${index}`} value={category}>{category}</option>
                    ))}
                </select>

                <select name="Level" id="searchBy" value={filteredRecipes.selectedLevel} onChange={(e) => {
                    setFilteredRecipes((preview) => {
                        return {...preview, selectedLevel: e.target.value}
                    })
                }}>

                    <option value="">All Levels</option>
                    {allLevel && allLevel.map((level, index) => (
                        <option key={`Level_${index}`} value={level}>{level}</option>
                    ))}
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
                </select>

            </div>
        </div>
    );
};

export default React.memo(SearchEngine);