// styles.tsx
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  noDataContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: height / 3,
    width: width - 80,
  },
  noDataText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
