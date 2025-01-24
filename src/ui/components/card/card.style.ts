import { StyleSheet } from 'react-native';

const cardStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: 242,
    borderWidth: 2,
    borderColor: 'black',
    shadowColor: '#000', 
    shadowOffset: { width: 2, height: 2 }, 
    shadowRadius: 3, 
    elevation: 5, 
  },
  headerRow: {
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'#b05d2e',
    width: '100%',
    paddingVertical: 15,
    marginBottom: 10,
    borderTopEndRadius: 8,
    borderTopStartRadius: 8
  },
  titleStyle: {
    flex: 1,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFFFFF',
    marginLeft: 10,
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
    backgroundColor: '#de892f'
  },
  genericCardTextSpacing: {
    marginTop: 5,
  },
  genericCardText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  favouriteIcon: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  iconButton: {
    padding: 5,
    alignSelf: 'flex-start',
  }
});

export default cardStyle;