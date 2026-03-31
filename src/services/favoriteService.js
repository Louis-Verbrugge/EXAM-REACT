export const getFavorites = () => {
  const data = localStorage.getItem('my_favorites');
  return data ? JSON.parse(data) : [];
};

export const isFavorite = (recipeId) => {
  const liste = getFavorites();
  return liste.includes(recipeId);
};

export const toggleFavorite = (recipeId) => {
  let liste = getFavorites();

  if (liste.includes(recipeId)) {
    liste = liste.filter(id => id !== recipeId);
  } else {
    liste.push(recipeId);
  }

  localStorage.setItem('my_favorites', JSON.stringify(liste));
};