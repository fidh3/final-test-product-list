import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { memo, useCallback, useEffect } from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { MainParamList, Page } from "../../navigation/types";
import Card from "../../components/card/card.atom";
import { homeStyle } from "./home.style";
import { ProductCard, useCards } from "../hook/useCards";

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Page.Home>;
}

const HomePage = ({ navigation }: Props) => {
  const { cards, favoriteIds, addFavorite } = useCards();

  const handleAddFavorite = useCallback((card: ProductCard) => {
    addFavorite(card);
  }, [addFavorite]);

  const renderItem = useCallback<ListRenderItem<ProductCard>>(
    ({ item }) => (
      <Card
        card={item}
        onPress={() => {
          navigation.navigate(Page.Details, { id: item.id });
        }}
        selected={favoriteIds.includes(item.id)}
        onAddSaved={() => handleAddFavorite(item)}
      />
    ),
    [navigation, favoriteIds, handleAddFavorite]
  );

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