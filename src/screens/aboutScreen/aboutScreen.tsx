import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import RenderImageItem from '../../components/renderImageItem/renderImageItem';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');


const AboutScreen = () => {
  // Mock data for the cards
  const [listData, setListData] = useState([]);
  const navigation = useNavigation();


  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://li-ji-n.github.io/JsonData/CONTENTLISTINGPAGE-PAGE1.json`,
      );
      const data = await response.json();
      const {
        'total-content-items': totalContentItems,
        'page-size-returned': pageSizeReturned,
        'content-items': contentItems,
      } = data.page;


      setListData(contentItems.content);
    } catch (error) {
      console.log(JSON.stringify(error));
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Movie Mart</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {listData.map(item => (
          <RenderImageItem item={item} />
        ))}
      </ScrollView>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}
        style={styles.viewAllButton}>
        <Text style={styles.viewAllButtonText}>View All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginTop: 30,
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

export default AboutScreen;
