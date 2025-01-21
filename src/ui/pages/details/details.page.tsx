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
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text>Schermata Dettagli</Text>
      <Text>Parametro ricevuto: {item}</Text>
    </View>
  );
};

export default DetailsPage;