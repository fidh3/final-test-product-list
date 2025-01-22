import { StyleSheet } from 'react-native';


const cardStyle = StyleSheet.create({
 container:{
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    width: 242,
    padding: 10,
 },

 titleStyle: {
    textAlign: 'left',
    fontWeight: '400',
    fontSize: 20,
    color: '#151515'
 },

 containerImage: {
    alignItems: 'flex-end',
  },
  imageStyle: {
    width: 183,
    height: 225,
    borderRadius: 8
  },
  genericCardTextSpacing: {
    marginTop: 8,
  },
  genericCardText: {
    fontSize: 16,
    color: 'white',
  },

  favouriteIcon: {
    width:25,
    height: 25,
  }

})

export default cardStyle;