// styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  searchBarContainer: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
  },
  backIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
    marginRight: 15,
    tintColor: '#fff',
  },
  searchText: {
    flex: 1,
    fontSize: 18,
    color: '#fff',
    fontFamily: 'TitilliumWeb-Light',
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
});
