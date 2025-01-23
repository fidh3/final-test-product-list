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

  // Carica le carte dall'API
  const refreshCards = useCallback(async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
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

      // Filtra le carte preferite in base agli ID salvati
      const favoriteCards = cards.filter(card => parsedFavorites.includes(card.id));
      setFavoriteCards(favoriteCards);
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  }, [cards]); // Aggiungi `cards` come dipendenza

  // Aggiungi o rimuovi una carta dai preferiti
  const addFavorite = useCallback(
    async (item: ProductCard) => {
      const updatedFavorites = favoriteIds.includes(item.id)
        ? favoriteIds.filter((id) => id !== item.id) // Rimuovi la carta dai preferiti
        : [...favoriteIds, item.id]; // Aggiungi la carta ai preferiti
  
      setFavoriteIds(updatedFavorites);
  
      // Filtra le carte preferite in base agli ID aggiornati
      const favoriteCards = cards.filter(card => updatedFavorites.includes(card.id));
      setFavoriteCards(favoriteCards);
  
      // Salva i preferiti nello storage
      await storage.setItem(PREFERRED_CARDS, JSON.stringify(updatedFavorites));
    },
    [favoriteIds, cards] // Aggiungi `cards` come dipendenza
  );

  // Carica le carte e i preferiti quando il componente viene montato
  useEffect(() => {
    refreshCards();
    loadFavorites();
  }, [refreshCards, loadFavorites]);

  return {
    cards,
    favoriteIds,
    favoriteCards,
    refreshCards,
    loadFavorites,
    addFavorite,
  };
};