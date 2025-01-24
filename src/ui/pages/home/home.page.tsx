import React, { memo, useCallback, useState } from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useFocusEffect } from '@react-navigation/native'; // Importa useFocusEffect
import { MainParamList, Page } from "../../navigation/types";
import Card from "../../components/card/card.atom";
import { homeStyle } from "./home.style";
import { ProductCard, useCards } from "../hook/useCards";
import { Ionicons } from '@expo/vector-icons';
import Button from "../../components/buttons/button.component";

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Page.Home>;
}

enum ButtonType {
  initial = 'initial',
  ascendent = 'ascendent',
  descendent = 'descendent',
}

const HomePage = ({ navigation }: Props) => {
  const { cards, setCards, initialCards, favoriteIds, addFavorite, loadFavorites } = useCards();
  const [buttonType, setButtonType] = useState<ButtonType>(ButtonType.initial);

  // Usa useFocusEffect per aggiornare i preferiti quando la schermata è in focus
  useFocusEffect(
    useCallback(() => {
      loadFavorites(); // Ricarica i preferiti ogni volta che la schermata è in focus
    }, [loadFavorites])
  );

  // Button useCallback
  const onFilterApply = useCallback(
    (type: ButtonType) => {
      setButtonType(type);

      let sortedCards = [...initialCards];

      if (type === ButtonType.ascendent) {
        sortedCards.sort((a, b) => a.rating.count - b.rating.count);
      } else if (type === ButtonType.descendent) {
        sortedCards.sort((a, b) => b.rating.count - a.rating.count);
      }

      setCards(sortedCards);
    },
    [initialCards, setCards]
  );

  // Rendering buttons
  const renderFilterButtons = useCallback(() => {
    return (
      <View style={homeStyle.filtersContainer}>
        <Button onPress={() => onFilterApply(ButtonType.descendent)}>
          <Ionicons
            name={'arrow-down'}
            size={24}
            color={buttonType === ButtonType.descendent ? 'yellow' : '#ffffff'}
          />
        </Button>

        <Button onPress={() => onFilterApply(ButtonType.ascendent)}>
          <Ionicons
            name={'arrow-up'}
            size={24}
            color={buttonType === ButtonType.ascendent ? 'yellow' : '#ffffff'}
          />
        </Button>

        <Button onPress={() => onFilterApply(ButtonType.initial)}>
          <Ionicons
            name={'refresh'}
            size={24}
            color={buttonType === ButtonType.initial ? 'yellow' : '#ffffff'}
          />
        </Button>
      </View>
    );
  }, [buttonType, onFilterApply]);

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
      {renderFilterButtons()}

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