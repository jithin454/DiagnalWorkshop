import React, {useEffect} from 'react';
import {View, Image} from 'react-native';

import ENV from '../../../env';
import {styles} from './styles';

interface EmptyListComponentProps {
  searchText: string;
  isLoading: boolean;
  listEnd: boolean;
  handleEndReached: () => void;
}

const EmptyListComponent: React.FC<EmptyListComponentProps> = ({
  searchText,
  isLoading,
  listEnd,
  handleEndReached,
}) => {
  const imagePlaceHolder = ENV.noDataFound;

  useEffect(() => {
    // Ensure that the handleEndReached function is called only when the condtion is satisfied
    if (searchText && !isLoading && !listEnd) {
      handleEndReached();
    }
  }, [searchText, isLoading, listEnd, handleEndReached]); // Add dependencies to useEffect hook to prevent unnecessary executions

  return (
    <View style={styles.noDataContainer}>
      <Image style={styles.image} source={{uri: imagePlaceHolder}} />
    </View>
  );
};

export default EmptyListComponent;
