// styles.tsx
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#000'
  },
  listStyle: {
    marginTop: -30,
    paddingTop: 10,
    height: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#000',
  },
  listContainer: {
    flexGrow: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
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
  footer: {
    height: 20,
    marginVertical: 10,
  },
});
