import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface EmptyListComponentProps {
  searchText: string;
  isLoading: boolean;
  listEnd: boolean;
  handleEndReached: () => void;
}

const EmptyListComponent: React.FC<EmptyListComponentProps> = ({ searchText, isLoading, listEnd, handleEndReached }) => {
  useEffect(() => {
    // Ensure that the handleEndReached function is called only when the condtion is satisfied
    if (searchText && !isLoading && !listEnd) {
      handleEndReached();
    }
  }, [searchText, isLoading, listEnd, handleEndReached]); // Add dependencies to useEffect hook to prevent unnecessary executions

  return (
    <View style={styles.noDataContainer}>
      <Text style={styles.noDataText}>No data found!.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noDataContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EmptyListComponent;
