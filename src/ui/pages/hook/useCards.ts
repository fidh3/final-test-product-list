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

// Stato condiviso per i preferiti
let sharedFavoriteIds: number[] = [];
let sharedFavoriteCards: ProductCard[] = [];

export const useCards = () => {
  const [cards, setCards] = useState<ProductCard[]>([]);
  const [initialCards, setInitialCards] = useState<ProductCard[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<number[]>(sharedFavoriteIds);
  const [favoriteCards, setFavoriteCards] = useState<ProductCard[]>(sharedFavoriteCards);

  // Carica le carte dall'API
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
      sharedFavoriteIds = parsedFavorites; // Aggiorna lo stato condiviso
      setFavoriteIds(parsedFavorites);

      // Filtra le carte preferite in base agli ID salvati
      const favoriteCards = initialCards.filter((card) => parsedFavorites.includes(card.id));
      sharedFavoriteCards = favoriteCards; // Aggiorna lo stato condiviso
      setFavoriteCards(favoriteCards);
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  }, [initialCards]);

  // Aggiungi o rimuovi una carta dai preferiti
  const addFavorite = useCallback(
    async (item: ProductCard) => {
      const updatedFavorites = favoriteIds.includes(item.id)
        ? favoriteIds.filter((id) => id !== item.id) // Rimuovi la carta dai preferiti
        : [...favoriteIds, item.id]; // Aggiungi la carta ai preferiti

      sharedFavoriteIds = updatedFavorites; // Aggiorna lo stato condiviso
      setFavoriteIds(updatedFavorites);

      // Filtra le carte preferite in base agli ID aggiornati
      const favoriteCards = initialCards.filter((card) => updatedFavorites.includes(card.id));
      sharedFavoriteCards = favoriteCards; // Aggiorna lo stato condiviso
      setFavoriteCards(favoriteCards);

      // Salva i preferiti nello storage
      await storage.setItem(PREFERRED_CARDS, JSON.stringify(updatedFavorites));
    },
    [favoriteIds, initialCards]
  );

  // Carica le carte e i preferiti quando il componente viene montato
  useEffect(() => {
    refreshCards();
  }, [refreshCards]);

  // Carica i preferiti dopo che le carte sono state caricate
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