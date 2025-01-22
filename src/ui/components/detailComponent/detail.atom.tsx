import React from 'react';
import { View, Text, Image } from 'react-native';
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
}

const DetailAtom = ({ product }: DetailAtomProps) => {
    return (
        <View style={DetailAtomStyle.container}>
            <View style={DetailAtomStyle.headerRow}>
                <Text style={DetailAtomStyle.titleStyle}>{product.title}</Text>
            </View>

            <View style={DetailAtomStyle.containerImage}>
                <Image
                    source={{
                        uri: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    }}
                    style={DetailAtomStyle.imageStyle}
                />
            </View>
            <View style={DetailAtomStyle.descriptionContainer}>
                <Text style={DetailAtomStyle.descriptionText}>{product.description}</Text>
            </View>
            <View style={DetailAtomStyle.textContainer}>
                <Text style={DetailAtomStyle.genericCardText}>Price: ${product.price}</Text>
                <Text
                    style={[
                        DetailAtomStyle.genericCardText,
                        DetailAtomStyle.genericCardTextSpacing,
                    ]}
                >
                    Category: {product.category}
                </Text>
                <Text
                    style={[
                        DetailAtomStyle.genericCardText,
                        DetailAtomStyle.genericCardTextSpacing,
                    ]}
                >
                    Rating: {product.rate}/5 ({product.count} reviews)
                </Text>
            </View>
        </View>
    );
};

export default DetailAtom;