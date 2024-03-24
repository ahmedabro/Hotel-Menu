import React, { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    if(favorites.some((favorite) => favorite.idMeal === item.idMeal)) {
      console.log("Already Present")
    }
    else {
      setFavorites((prevFavorites) => [...prevFavorites, item]);
    }
  };

  const removeFromFavorites = (item) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.idMeal !== item.idMeal)
    );
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};