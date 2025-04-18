import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ item, handleNavigate }) => {
  const image = item.employer_logo || 'https://cdn-icons-png.flaticon.com/512/25/25231.png';

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image source={{ uri: image }} resizeMode='contain' style={styles.logoImage} />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.jobType} numberOfLines={1}>{item.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard