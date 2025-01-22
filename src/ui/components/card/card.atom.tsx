
import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import cardStyle from './card.style';
import DetailsPage from '../../pages/details/details.page';
interface ProductCard {

    id: number;
    title: string;
    price: number;
    category: string;
    image: string
    rate: number;
}
interface CardProps {
  card: ProductCard; // Oggetto con i dettagli della card
  onPress: () => void; // Funzione chiamata quando la card viene premuta
  selected: boolean; // Indica se l'elemento è selezionato
  onAddSaved: () => void; // Funzione per aggiungere/rimuovere dai preferiti
}

const Card = ({ card, onPress, selected, onAddSaved }: CardProps) => {
  const navigation = useNavigation(); // Hook per la navigazione

  return (
    <TouchableOpacity
     onPress={() => navigation.navigate('DetailsPage', { card })} // Naviga alla schermata di dettaglio
    >
      <View style={cardStyle.container}>
        <Text style={cardStyle.titleStyle}>{card.title}</Text>
        <Ionicons
          onPress={onAddSaved}
          name={selected ? 'star-sharp' : 'star-outline'}
          size={28}
          color={'#ffd700'}
        />
        <Image
          source={{
            uri: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          }}
          style={cardStyle.imageStyle}
        />
        <Text style={cardStyle.genericCardText}>Rating: {card.rate}</Text>
        <Text style={[cardStyle.genericCardText, cardStyle.genericCardTextSpacing]}>
          Price: {card.price} $
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(Card);
