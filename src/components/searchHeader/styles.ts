// styles.ts
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backGround: {height: 70, zIndex: 1, paddingHorizontal: 10, marginTop: 20},
  searchBarContainer: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
    flex: 1,
    resizeMode: 'cover',
  },
  outerWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
