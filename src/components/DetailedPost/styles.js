import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    fontWeight: 'bold',
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
  longText: {
    marginVertical: 15,
    fontSize: 15,
    lineHeight: 24,
  },
});

export default styles;
