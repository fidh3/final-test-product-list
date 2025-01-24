import { useState, useCallback, useEffect } from 'react';
import { PREFERRED_CARDS } from '../../../core/storage/types';
import { storage } from '../../../core/storage/storage';

export interface ProductCard {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const useCards = () => {
  const [cards, setCards] = useState<ProductCard[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [favoriteCards, setFavoriteCards] = useState<ProductCard[]>([]);
  const [initialCards, setInitialCards] = useState<ProductCard[]>([]);


  const refreshCards = useCallback(async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setInitialCards(data); 
      setCards(data); 
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  }, []);

  // Carica i preferiti dallo storage
  const loadFavorites = useCallback(async () => {
    try {
      const storedFavorites = await storage.getItem(PREFERRED_CARDS);
      const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
      setFavoriteIds(parsedFavorites);

      
      const favoriteCards = initialCards.filter(card => parsedFavorites.includes(card.id));
      setFavoriteCards(favoriteCards);
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  }, [initialCards]); // Dipende solo da initialCards

  // Aggiungi o rimuovi una carta dai preferiti
  const addFavorite = useCallback(
    async (item: ProductCard) => {
      const updatedFavorites = favoriteIds.includes(item.id)
        ? favoriteIds.filter((id) => id !== item.id) // Rimuovi la carta dai preferiti
        : [...favoriteIds, item.id]; // Aggiungi la carta ai preferiti

      setFavoriteIds(updatedFavorites);

      // Filtra le carte preferite in base agli ID aggiornati
      const favoriteCards = initialCards.filter(card => updatedFavorites.includes(card.id));
      setFavoriteCards(favoriteCards);

    
      await storage.setItem(PREFERRED_CARDS, JSON.stringify(updatedFavorites));
    },
    [favoriteIds, initialCards] 
  );

  // Carica le carte e i preferiti quando il componente viene montato
  useEffect(() => {
    refreshCards();
  }, [refreshCards]);


  useEffect(() => {
    if (initialCards.length > 0) {
      loadFavorites();
    }
  }, [initialCards, loadFavorites]);

  return {
    initialCards,
    cards,
    setCards,
    favoriteIds,
    favoriteCards,
    refreshCards,
    loadFavorites,
    addFavorite,
  };
};