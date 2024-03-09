import React, { useEffect, useState } from 'react';
import { Text, View, Image, Dimensions, LayoutAnimation, TouchableWithoutFeedback, Animated } from 'react-native';
import { styles } from './styles'; // Adjust the import path as necessary
import ENV from '../../../env';

interface Item {
  name: string;
  'poster-image': string;
}

interface RenderImageItemProps {
  item: Item;
}

const RenderImageItem: React.FC<RenderImageItemProps> = ({ item }) => {
  const imagePath = `${ENV.apiUrl}images/${item['poster-image']}`;
  const imagePlaceHolder = ENV.placeHolderUrl;
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));
  const [hasError, setHasError] = useState(false);
  const scaleValue = new Animated.Value(1);

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

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View style={[styles.renderItem, { width: (dimensions.width - 80) / 3, transform: [{ scale: scaleValue }] }]}>
        <Image style={styles.image} onError={() => setHasError(true)} source={{ uri: hasError ? imagePlaceHolder : imagePath  }} />
        <Text numberOfLines={1} style={styles.name}>
          {item.name}
        </Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default RenderImageItem;
