import { useState, useCallback } from 'react';
import { PREFERRED_CARDS } from '../../../core/storage/types';
import { storage } from '../../../core/storage/storage';

interface ProductCard {

    id: number;
    title: string;
    price: number;
    category: string;
    image: string
    rate: number;
}



export const useCards = () => {
  const [cards, setCards] = useState<ProductCard[]>([]);
  const [initialCards, setInitialCards] = useState<ProductCard[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  
  const loadFavorites = useCallback(async () => {
    try {
      const storedFavorites = await storage.getItem(PREFERRED_CARDS);
      const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
      setFavoriteIds(parsedFavorites);
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  }, []);

  const addFavorite = useCallback(
    async (item: ProductCard) => {
      const updatedFavorites = favoriteIds.includes(item.id)
        ? favoriteIds.filter((id) => id !== item.id)
        : [...favoriteIds, item.id];

      setFavoriteIds(updatedFavorites);
      await storage.setItem(PREFERRED_CARDS, JSON.stringify(updatedFavorites));
    },
    [favoriteIds]
  );

  return {
    cards,
    setCards,
    initialCards,
    setInitialCards,
    favoriteIds,
    refreshCards,
    loadFavorites,
    addFavorite,
  };
};