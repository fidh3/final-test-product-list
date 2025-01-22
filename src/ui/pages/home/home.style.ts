import { StyleSheet } from 'react-native';
export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContent: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  itemSeparator: {
    height: 20,
  },
  detailItem: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backButton: {
    width: 24,
    height: 24,
  },
});
