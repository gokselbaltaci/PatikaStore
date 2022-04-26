import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eaeaea',
    margin: 6,
    borderRadius: 5,
    flex: 1,
  },
  image_container: {
    alignItems: 'center',
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    resizeMode: 'contain',
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 4,
  },
  title: {
    marginTop: 7,
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontWeight: '500',
    fontSize: 17,
    marginTop: 10,
  },
  inStock: {
    color: 'red',
    fontWeight: '900',
    fontSize: 20,
  },
  text_container: {
    width: Dimensions.get('window').width / 2 - 50,
  },
});
