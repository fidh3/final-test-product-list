import { StyleSheet } from 'react-native';
export const detailStyle = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },

  // Header section
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  titleStyle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1a1a1a',
    flex: 1,
    marginRight: 16,
  },

  // Icon button
  iconButton: {
    padding: 8,
  },

  favouriteIcon: {
    width: 24,
    height: 24,
    tintColor: '#ff4757', // Red color for favorite icon
  },

  // Image section
  containerImage: {
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
  },

  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  // Description section
  descriptionContainer: {
    marginVertical: 16,
  },

  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4a4a4a',
  },

  // Text container for price, category, rating
  textContainer: {
    marginTop: 8,
  },

  genericCardText: {
    fontSize: 16,
    color: '#2d2d2d',
    fontWeight: '500',
  },

  genericCardTextSpacing: {
    marginTop: 8,
  },

  // Separator
  itemSeparator: {
    height: 16,
  },
});