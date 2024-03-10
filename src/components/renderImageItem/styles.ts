// styles.tsx
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  renderItem: {
    marginTop: 16,
    marginBottom: 24,
    marginHorizontal: 10,
  },
  errorImage: {
    width: '100%',
    marginVertical: 5,
    aspectRatio: 0.669,
    justifyContent: 'center',
  },
  errorText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 2,
    fontFamily: 'TitilliumWeb-Light',
  },
  image: {
    width: '100%',
    marginVertical: 5,
    aspectRatio: 0.669,
    borderRadius: 2,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'TitilliumWeb-Light',
  },
});
