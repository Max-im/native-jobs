import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({ item, selectedJob, handleNavigate }) => {
  const image = item.employer_logo || 'https://cdn-icons-png.flaticon.com/512/25/25231.png';

  return (
    <TouchableOpacity style={styles.container(selectedJob, item)} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image source={{ uri: image }} resizeMode='contain' style={styles.logoImage} />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.empoyer_name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard