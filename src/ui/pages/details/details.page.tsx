import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { homeStyle } from '../home/home.style';
import { MainParamList, Page } from '../../navigation/types';
import { Ionicons } from '@expo/vector-icons';
import detailStyle from './details.style';

const DetailsPage = ({ route }: any) => {
  const { card } = route.params; // Recupera i dati della card

  return (
    <View style={detailStyle.container}>
      <Text style={detailStyle.title}>{card.title}</Text>
      <Text>Rating: {card.rate}</Text>
      <Text>Price: {card.price} $</Text>
      <Text>Description: {card.description}</Text>
    </View>
  );
};




export default DetailsPage;