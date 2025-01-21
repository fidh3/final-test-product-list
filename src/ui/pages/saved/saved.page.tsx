import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { homeStyle } from "../home/home.style";
import { Ionicons } from '@expo/vector-icons';
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainParamList, Page } from "../../navigation/types";

interface Props {
    navigation: NativeStackNavigationProp<MainParamList>;
    route: RouteProp<MainParamList, Page.Saved>;
  }
  
  const SavedPage = ({ navigation, route }: Props) => {
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
        <Text>Schermata Salvati</Text>
        <Text>Parametro ricevuto: {item}</Text>
      </View>
    );
  };
  
  export default SavedPage;