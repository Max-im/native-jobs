import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native'

import styles from './screenheader.style';

const ScreenHeaderBtn = ({ imageUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={imageUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn