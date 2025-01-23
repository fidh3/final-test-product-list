import { StyleSheet } from 'react-native';

const cardStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    width: 242,
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  titleStyle: {
    flex: 1,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#151515',
    marginRight: 10,
  },
  containerImage: {
    alignItems: 'center',  
    width: '100%',        
},
imageStyle: {
  width: 170,
  height: 205,
  alignSelf: 'center',
  resizeMode: 'contain'  
},
  textContainer: {
    width: '100%',
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: '#c9c9c9'
  },
  genericCardTextSpacing: {
    marginTop: 8,
  },
  genericCardText: {
    fontSize: 16,
    color: 'black',
  },
  favouriteIcon: {
    width: 20,
    height: 20,
  },
  iconButton: {
    padding: 5,
    alignSelf: 'flex-start',
  }
});

export default cardStyle;