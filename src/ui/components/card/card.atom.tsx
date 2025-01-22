
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
    description: string;
    category: string;
    image: string
    rate: number;
    count: number;
}
interface CardProps {
  card: ProductCard; // Oggetto con i dettagli della card
  onPress: () => void; // Funzione chiamata quando la card viene premuta
  selected: boolean; // Indica se l'elemento è selezionato
  onAddSaved: () => void; // Funzione per aggiungere/rimuovere dai preferiti
}

const Card = ({ card, onPress, selected = false, onAddSaved }: CardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={cardStyle.container}>
      <View style={cardStyle.headerRow}>
        <Text style={cardStyle.titleStyle} numberOfLines={3}>
          {card.title}
        </Text>
        <TouchableOpacity 
          onPress={onAddSaved}
          style={cardStyle.iconButton}
        >
          <Ionicons
            name={selected ? 'star-sharp' : 'star-outline'}
            size={25}
            color={'#ffd700'}
            style={cardStyle.favouriteIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={cardStyle.containerImage}>
        <Image
          source={{
            uri: card.image
          }}
          style={cardStyle.imageStyle}
        />
      </View>
      <View style={cardStyle.textContainer}>
        <Text style={cardStyle.genericCardText}>Rating: {card.rate}</Text>
        <Text style={[cardStyle.genericCardText, cardStyle.genericCardTextSpacing]}>
          Price: {card.price} $
        </Text>
      </View>
    </TouchableOpacity>
  );
 };
export default memo(Card);
