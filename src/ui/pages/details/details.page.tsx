import React, { useCallback, useEffect, useState } from "react";
import { View, FlatList, ListRenderItem, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MainParamList, Page } from "../../navigation/types";
import { detailStyle } from "./details.style";
import { Ionicons } from '@expo/vector-icons';
import DetailAtom from "../../components/detailComponent/detail.atom";


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rate: number;
  count: number;
}

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Page.Details>;
  route: RouteProp<MainParamList, Page.Details>;
}

const DetailsPage = ({ navigation, route }: Props) => {
  const { top, bottom } = useSafeAreaInsets();
  const { id } = route.params;
  const [product, setProduct] = useState<Product | null>(null);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1" + id)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  const ItemSeparatorComponent = useCallback(
    () => <View style={detailStyle.itemSeparator} />,
    []
  );

  const handleAddSaved = useCallback(() => {
    setSelected(prev => !prev);
  }, []);

  const renderDetailItem = useCallback<ListRenderItem<Product>>(
    ({ item }) => (
      <DetailAtom 
        product={item}
        selected={selected}
      
      />
    ),
    [selected, handleAddSaved]
  );

  return (
    <View
      style={[detailStyle.container, { marginTop: top, marginBottom: bottom }]}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={product ? [product] : []}
        renderItem={renderDetailItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

export default DetailsPage;