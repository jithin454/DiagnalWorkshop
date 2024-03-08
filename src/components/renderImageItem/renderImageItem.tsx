import React, { useEffect, useState } from 'react';
import { Text, View, Image, Dimensions, LayoutAnimation } from 'react-native';
import { styles } from './styles'; // Adjust the import path as necessary

interface Item {
  name: string;
  'poster-image': string;
}

interface RenderImageItemProps {
  item: Item;
}

const RenderImageItem: React.FC<RenderImageItemProps> = ({ item }) => {
  const imagePath = `https://jithin454.github.io/PaginationApi/images/${item['poster-image']}`;
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const updateDimensions = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      setDimensions(Dimensions.get('window'));
    };
    Dimensions.addEventListener('change', updateDimensions);

    return () => {
      Dimensions.removeEventListener('change', updateDimensions);
    };
  }, []);

  return (
    <View style={[styles.renderItem, { width: (dimensions.width - 80) / 3 }]}>
      <Image style={styles.image} source={{ uri: imagePath }} />
      <Text numberOfLines={1} style={styles.name}>
        {item.name}
      </Text>
    </View>
  );
};

export default RenderImageItem;
