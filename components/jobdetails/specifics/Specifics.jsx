import React from 'react'
import { View, Text } from 'react-native'

import styles from './specifics.style'

const Specifics = ({title, points}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      <View style={styles.pointsContainer}>
        {points.map((point, index) => (
          <View styles={styles.pointWrapper} key={point + index}>
            <Text style={styles.pointText}>{point}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Specifics