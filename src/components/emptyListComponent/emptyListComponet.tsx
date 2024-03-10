import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import ENV from '../../../env';

interface EmptyListComponentProps {
  searchText: string;
  isLoading: boolean;
  listEnd: boolean;
  handleEndReached: () => void;
}
const { width, height } = Dimensions.get('window');


const EmptyListComponent: React.FC<EmptyListComponentProps> = ({ searchText, isLoading, listEnd, handleEndReached }) => {
  const imagePlaceHolder = ENV.noDataFound;


  useEffect(() => {
    // Ensure that the handleEndReached function is called only when the condtion is satisfied
    if (searchText && !isLoading && !listEnd) {
      handleEndReached();
    }
  }, [searchText, isLoading, listEnd, handleEndReached]); // Add dependencies to useEffect hook to prevent unnecessary executions

  return (
    <View style={styles.noDataContainer}>
      <Image style={styles.image} source={{ uri: imagePlaceHolder }} />
    </View>
  );
};

const styles = StyleSheet.create({
  noDataContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: height / 3,
    width: width  - 80
  },
  noDataText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EmptyListComponent;
