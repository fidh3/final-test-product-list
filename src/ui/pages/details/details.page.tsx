import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { homeStyle } from '../home/home.style';
import { MainParamList, Page } from '../../navigation/types';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList>;
  route: RouteProp<MainParamList, Page.Details>;
}

const DetailsPage = ({ navigation, route }: Props) => {
  const { item } = route.params;

  
};

export default DetailsPage;