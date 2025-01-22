
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DetailAtomStyle from './detail.atom.style';

interface DetailAtom {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rate: number;
    count: number;
}

interface DetailAtomProps {
    product: DetailAtom;
    selected: boolean;
    onAddSaved: () => void;
}

const DetailAtom = ({ product, selected = false, onAddSaved }: DetailAtomProps) => {
    return (
        <View style={DetailAtomStyle.container}>
            <View style={DetailAtomStyle.headerRow}>
                <Text style={DetailAtomStyle.titleStyle}>
                    {product.title}
                </Text>
                <TouchableOpacity 
                    onPress={onAddSaved}
                    style={DetailAtomStyle.iconButton}
                >
                    <Ionicons
                        name={selected ? 'star-sharp' : 'star-outline'}
                        size={25}
                        color={'#ffd700'}
                        style={DetailAtomStyle.favouriteIcon}
                    />
                </TouchableOpacity>
            </View>
            <View style={DetailAtomStyle.containerImage}>
                <Image
                    source={{
                        uri: product.image
                    }}
                    style={DetailAtomStyle.imageStyle}
                />
            </View>
            <View style={DetailAtomStyle.descriptionContainer}>
                <Text style={DetailAtomStyle.descriptionText}>{product.description}</Text>
            </View>
            <View style={DetailAtomStyle.textContainer}>
                <Text style={DetailAtomStyle.genericCardText}>Rating: {product.rate}</Text>
                <Text style={[DetailAtomStyle.genericCardText, DetailAtomStyle.genericCardTextSpacing]}>
                    Price: {product.price} $
                </Text>
            </View>
        </View>
    );
};

export default DetailAtom;