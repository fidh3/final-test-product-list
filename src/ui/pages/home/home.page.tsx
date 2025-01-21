import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { homeStyle } from './home.style';
import { MainParamList, Page } from '../../navigation/types';

interface Props {
  navigation: NativeStackNavigationProp<MainParamList, Page.Home>;
}
const HomePage = ({ navigation }: Props) => {
  return (
    <View style={homeStyle.container}>
      <Pressable
        onPress={() => navigation.navigate(Page.Saved)}>
        <Text>Vai alla schermata Salvati</Text>
      </Pressable>
    </View>
  );
};
export default HomePage;