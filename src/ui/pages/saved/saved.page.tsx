import React, { useCallback } from "react";
import { TouchableOpacity, View, FlatList } from "react-native";
import { useFocusEffect } from '@react-navigation/native'; // Importa useFocusEffect
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainParamList, Page } from "../../navigation/types";
import Card from "../../components/card/card.atom";
import { ProductCard, useCards } from "../hook/useCards";
import { homeStyle } from "../home/home.style";

interface Props {
  navigation: NativeStackNavigationProp<MainParamList>;
  route: RouteProp<MainParamList, Page.Saved>;
}

const SavedPage = ({ navigation, route }: Props) => {
  const { favoriteCards, favoriteIds, addFavorite, loadFavorites } = useCards();

  // Usa useFocusEffect per aggiornare i preferiti quando la schermata è in focus
  useFocusEffect(
    useCallback(() => {
      loadFavorites(); // Ricarica i preferiti ogni volta che la schermata è in focus
    }, [loadFavorites])
  );

  const handleAddFavorite = useCallback((card: ProductCard) => {
    addFavorite(card); // Usa addFavorite per aggiungere/rimuovere la carta
  }, [addFavorite]);

  const renderItem = useCallback(
    ({ item }) => (
      <Card
        card={item}
        onPress={() => {
          navigation.navigate(Page.Details, { id: item.id });
        }}
        selected={favoriteIds.includes(item.id)} // Usa favoriteIds per determinare se la carta è preferita
        onAddSaved={() => handleAddFavorite(item)} 
      />
    ),
    [navigation, favoriteIds, handleAddFavorite]
  );

  return (
    <View style={homeStyle.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          position: 'absolute',
          left: 20,
          top: 20,
          padding: 10,
        }}
      >
        {}
      </TouchableOpacity>
      <FlatList
        data={favoriteCards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={homeStyle.listContent}
      />
    </View>
  );
};

export default SavedPage;