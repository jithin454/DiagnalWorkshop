import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'; // Import ActivityIndicator
import RenderImageItem from '../../components/renderImageItem/renderImageItem';
import { useNavigation } from '@react-navigation/native';
import ENV from '../../../env';
import { styles } from './styles';

const { width, height } = Dimensions.get('window');

const AboutScreen = () => {
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // New state to manage loading state
  const navigation = useNavigation();

  const fetchData = async () => {
    try {
      setIsLoading(true); // Start loading
      const response = await fetch(`${ENV.apiUrl}CONTENTLISTINGPAGE-PAGE1.json`);
      const data = await response.json();
      const {
        'content-items': contentItems,
      } = data.page;

      setListData(contentItems.content);
    } catch (error) {
      console.log(JSON.stringify(error));
      console.error(error);
    } finally {
      setIsLoading(false); // End loading regardless of the outcome
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Movie Mart</Text>
      
      {/* Show loader when data is being fetched */}
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {listData.map((item, index) => ( // Add a key to each item
            <RenderImageItem key={index.toString()} item={item} />
          ))}
        </ScrollView>
      )}

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.viewAllButton}>
        <Text style={styles.viewAllButtonText}>View All</Text>
      </TouchableOpacity>
    </View>
  );
};


export default AboutScreen;
