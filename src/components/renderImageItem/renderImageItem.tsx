// RenderImageItem.tsx
import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles'; // Adjust the import path as necessary

interface ItemProps {
  name: string;
  'poster-image': string;
}


const RenderImageItem: React.FC = () => {
  const imagePath = 'https://wallpapers.com/images/featured/avatar-eoaiyd4amdhnf8id.jpg';

  return (
    <View style={styles.renderItem}>
      <Image
        style={styles.image}
        source={{ uri: imagePath }}
      />
      <Text numberOfLines={1} style={styles.name}>
        {'demo'}
      </Text>
    </View>
  );
};

export default RenderImageItem;
