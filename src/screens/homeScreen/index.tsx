import React, { useEffect, useState, useCallback, useReducer, useMemo } from 'react';
import { ActivityIndicator, FlatList, Image, NativeSyntheticEvent, SafeAreaView, StyleSheet, Text, TextInputKeyPressEventData, View } from 'react-native';
import RenderImageItem from '../../components/renderImageItem/renderImageItem';
import SearchHeader from '../../components/searchHeader/SearchHeader';
import { styles } from './styles';
import EmptyListComponent from '../../components/emptyListComponent/emptyListComponet';
import ENV from '../../../env';

function HomeScreen(): React.JSX.Element {
  const [searchText, setSearchText] = useState<string>('');
  const [state, dispatch] = useReducer(reducer, initialState);
  const regex = useMemo(() => new RegExp(`^.{0,30}${searchText}.{0,}`, 'i'), [searchText]);
  const logo = ENV.log;

  // Function to fetch data and dispatch corresponding action with repect to the API response

  const fetchData = useCallback(async () => {
    try {
      dispatch({ type: 'FETCH_START' });
      // removed the base url from the JSX part without using any external packages.
      const response = await fetch(`${ENV.apiUrl}CONTENTLISTINGPAGE-PAGE${state.page}.json`);
      const data = await response.json();
      const { 'total-content-items': totalContentItems, 'page-size-returned': pageSizeReturned, 'content-items': contentItems } = data.page;

      if (parseInt(totalContentItems) === state.listData.length + parseInt(pageSizeReturned)) {
        dispatch({ type: 'LIST_END' });
      }

      dispatch({ type: 'FETCH_SUCCESS', payload: contentItems.content });
    } catch (error) {
      console.error(error);
      dispatch({ type: 'FETCH_ERROR' });
    }
  }, [state.page, state.listData]);

  // Function to handle end reached event and Fetch more data when end of list is reached

  const handleEndReached = useCallback(() => {
    if (!state.isLoading && !state.listEnd) {
      fetchData();
    }
  }, [state.isLoading, state.listEnd, fetchData]);

  // Generate a random key for each list item in the fatlist

  const getRandomKey = useCallback((name: string) => {
    return name + Math.random().toString().substr(2, 9);
  }, []);

  // Filtering the data based on search input with using regex

  const filteredData = useMemo(() => state.listData.filter(item => regex.test(item.name)), [state.listData, regex]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleTextChange = (text: string) => {
    if (text.length <= 30) {
      setSearchText(text);
    }
  };

  const footerComponent = useCallback(() => <View style={styles.footer} >
   {!state.listEnd && <ActivityIndicator color={'red'} />}
  </View>, [state.listEnd]);

  return (
    <SafeAreaView style={styles.Container}>
      <SearchHeader
        searchText={searchText}
        handleTextChange={handleTextChange}
      />
      {state.loaded ? (
        <FlatList
          data={filteredData}
          renderItem={({ item }) => <RenderImageItem item={item} />}
          numColumns={3}
          style={styles.listStyle}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => getRandomKey(item.name.toString())}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          ListFooterComponent={footerComponent}
          ListEmptyComponent={<EmptyListComponent searchText={searchText} isLoading={state.isLoading} listEnd={state.listEnd} handleEndReached={handleEndReached} />}
        />
      ) : (
        <View style={styles.loaderContainer}>
          <Image style={styles.image} source={{ uri: logo }} />
          <ActivityIndicator size={'large'} color={'red'} />
        </View>
      )}
    </SafeAreaView>
  );
}

// Initial state for listing and paginating the data

const initialState = {
  page: 1,
  listData: [],
  listEnd: false,
  isLoading: false,
  loaded: false
};

// Reducer function for managing  fetch data, Loading state of the data , increment page number and listEnd state

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, isLoading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        listData: [...state.listData, ...action.payload],
        page: state.page + 1,
        isLoading: false,
        loaded: true
      };
    case 'FETCH_ERROR':
      return { ...state, isLoading: false, loaded: true };
    case 'LIST_END':
      return { ...state, listEnd: true };
    default:
      return state;
  }
}

export default HomeScreen;
