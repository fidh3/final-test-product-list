import React, { useCallback, useEffect, useState } from "react";
import {View, FlatList,ListRenderItem,Text, Image,TouchableOpacity,} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MainParamList, Page } from "../../navigation/types";
import { detailStyle } from "./details.style";
import { Ionicons } from '@expo/vector-icons';

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

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1" + id)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  const ItemSeparatorComponent = useCallback(
    () => <View style={detailStyle.itemSeparator} />,
    []
  );

  const renderDetailItem = useCallback<ListRenderItem<Product>>(
    ({ item }) => (
      <View style={detailStyle.container}>
        <View style={detailStyle.headerRow}>
          <Text style={detailStyle.titleStyle}>{item.title}</Text>
        </View>

        <View style={detailStyle.containerImage}>
          <Image
            source={{
              uri: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            }}
            style={detailStyle.imageStyle}
          />
        </View>
        <View style={detailStyle.descriptionContainer}>
          <Text style={detailStyle.descriptionText}>{item.description}</Text>
        </View>
        <View style={detailStyle.textContainer}>
          <Text style={detailStyle.genericCardText}>Price: ${item.price}</Text>
          <Text
            style={[
              detailStyle.genericCardText,
              detailStyle.genericCardTextSpacing,
            ]}
          >
            Category: {item.category}
          </Text>
          <Text
            style={[
              detailStyle.genericCardText,
              detailStyle.genericCardTextSpacing,
            ]}
          >
            Rating: {item.rate}/5 ({item.count} reviews)
          </Text>
        </View>
      </View>
    ),
    []
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
