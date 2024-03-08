// styles.tsx
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
noDataContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
noDataText: {
  color: '#fff',
  fontSize: 14,
  fontFamily: 'TitilliumWeb-Light',
},
});
