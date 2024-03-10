import React, {useEffect, useState} from 'react';
import {
  Text,
  Dimensions,
  LayoutAnimation,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

import FastImage from 'react-native-fast-image';

import {styles} from './styles';
import ENV from '../../../env';

interface Item {
  name: string;
  'poster-image': string;
}

interface RenderImageItemProps {
  item: Item;
}

const RenderImageItem: React.FC<RenderImageItemProps> = ({item}) => {

  // getting the image paths and placeholder URL
  const imagePath = `${ENV.apiUrl}images/${item['poster-image']}`;
  const imagePlaceHolder = ENV.placeHolderUrl;

  const [dimensions, setDimensions] = useState(Dimensions.get('window')); // Window dimensions
  const [hasError, setHasError] = useState(false);
  const scaleValue = new Animated.Value(1);


  // Effect hook to update dimensions on window resize on device rotation
  useEffect(() => {
    const updateDimensions = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      setDimensions(Dimensions.get('window')); // Update window dimensions
    };
    Dimensions.addEventListener('change', updateDimensions);
  }, []);


  // Handler for press in event
  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  
  // Handler for press out event
  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Animated.View
        style={[
          styles.renderItem,
          {
            width: (dimensions.width - 80) / 3,
            transform: [{scale: scaleValue}],
          },
        ]}>
        <FastImage
          style={styles.image}
          source={{
            uri: hasError ? imagePlaceHolder : imagePath,
            priority: FastImage.priority.high,
          }}
          onError={() => setHasError(true)}
        />
        <Text numberOfLines={1} style={styles.name}>
          {item.name}
        </Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default RenderImageItem;
