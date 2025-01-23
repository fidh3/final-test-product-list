import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, {memo, useCallback, useEffect, useState} from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { MainParamList, Page } from "../../navigation/types";
import Card from "../../components/card/card.atom";
import { homeStyle } from "./home.style";
import { ProductCard } from "../hook/useCards";



 interface Props {
  navigation:
  NativeStackNavigationProp<MainParamList, Page.Home>;
 }

 // In home.page.tsx
const HomePage = ({navigation}: Props) => {
  const [cards, setCards] = useState<ProductCard[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]); // Add state for favorites

  const handleAddFavorite = useCallback((cardId: number) => {
    setFavoriteIds(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  }, []);

  const renderItem = useCallback<ListRenderItem<ProductCard>>(
    ({item}) => (
      <Card
        card={item}
        onPress={() => {
          navigation.navigate(Page.Details, { id: item.id });
        }}
        selected={favoriteIds.includes(item.id)}
        onAddSaved={() => handleAddFavorite(item.id)}
      />
    ),
    [navigation, favoriteIds, handleAddFavorite]
  );

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((response) => setCards(response))
      .catch((error) => console.error('Error fetching cards:', error));
  }, []);

 
  return (
    <View style={homeStyle.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        contentContainerStyle={homeStyle.listContent}
      />
    </View>
  );
};
export default memo(HomePage);
  
