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
  const imagePlaceHolder = 'https://img.freepik.com/premium-vector/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.jpg'
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const [hasError, setHasError] = React.useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      setDimensions(Dimensions.get('window'));
    };
    Dimensions.addEventListener('change', updateDimensions);
  }, []);

  return (
    <View style={[styles.renderItem, { width: (dimensions.width - 80) / 3 }]}>
      <Image style={styles.image} onError={() => setHasError(true)} source={{ uri: hasError ? imagePlaceHolder : imagePath  }} />
      <Text numberOfLines={1} style={styles.name}>
        {item.name}
      </Text>
    </View>
  );
};

export default RenderImageItem;
