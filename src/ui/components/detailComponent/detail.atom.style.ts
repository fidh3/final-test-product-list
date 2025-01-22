import { StyleSheet } from 'react-native';
const detailAtomStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    titleStyle: {
        flex: 1,
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#151515',
        marginRight: 10,
    },
    containerImage: {
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    imageStyle: {
        width: '100%',
        height: 400,
        resizeMode: 'contain',
    },
    descriptionContainer: {
        padding: 16,
        marginBottom: 20,
    },
    descriptionText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
    },
    textContainer: {
        width: '100%',
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#c9c9c9',
    },
    genericCardTextSpacing: {
        marginTop: 8,
    },
    genericCardText: {
        fontSize: 18,
        color: 'black',
    },
    favouriteIcon: {
        width: 25,
        height: 25,
    },
    iconButton: {
        padding: 5,
    }
});

export default detailAtomStyle;