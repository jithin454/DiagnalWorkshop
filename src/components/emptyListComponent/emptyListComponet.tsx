import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const EmptyListComponent = ({ searchText , isLoading, listEnd, handleEndReached }) => {
  useEffect(() => {
    if (searchText && !isLoading && !listEnd) {
      handleEndReached();
    }
  }, []);

  return (
    <View style={styles.noDataContainer}>
      <Text style={styles.noDataText}>No data found!.</Text>
    </View>
  );
};

export default EmptyListComponent;
