import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'; // Import ActivityIndicator
import RenderImageItem from '../../components/renderImageItem/renderImageItem';
import { useNavigation } from '@react-navigation/native';
import ENV from '../../../env';
import { styles } from './styles';

const { width, height } = Dimensions.get('window');

const AboutScreen = () => {
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const navigation = useNavigation();

  // fetching the data to show list of items in a scrollview

  const fetchData = async () => {
    try {
      setIsLoading(true); 
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
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Movie Mart</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {listData.map((item, index) => (                              // maping for preview the list of data
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
