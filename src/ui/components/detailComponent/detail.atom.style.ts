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
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#151515',
        marginRight: 10,
    },
    containerImage: {
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
        borderTopWidth: 2,
        borderBottomWidth: 2,
    },
    imageStyle: {
        width: '100%',
        height: 400,
        resizeMode: 'contain',
        margin: 10
    },
    descriptionContainer: {
        padding: 16,
        marginBottom: 20,
    },
    descriptionText: {
        fontSize: 20,
        lineHeight: 20,
        fontWeight: 'medium',
        color: '#333',
    },
    textContainer: {
        width: '100%',
        padding: 16,
        borderRadius: 8,
        
        
    },
    genericCardTextSpacing: {
        marginTop: 8,
        
    },
    genericCardText: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        alignSelf:'flex-end'
        

    },
});

export default detailAtomStyle;