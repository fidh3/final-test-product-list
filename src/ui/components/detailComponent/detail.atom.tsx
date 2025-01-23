import React from 'react';
import { View, Text, Image } from 'react-native';
import DetailAtomStyle from './detail.atom.style';
import { ProductCard } from '../../pages/hook/useCards';



interface DetailAtomProps {
    product: ProductCard;
    
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
                        uri: product.image,
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
                    Rating: {product.rate} ({product.count} reviews)
                </Text>
            </View>
        </View>
    );
};

export default DetailAtom;