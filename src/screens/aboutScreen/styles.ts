// styles.tsx
import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,

  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginRight: 10,
    width: 300,
    height: height / 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
  },
  viewAllButton: {
    marginBottom: 30,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,

  },
  viewAllButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
