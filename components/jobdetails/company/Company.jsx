import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'

const Company = ({logo, name, job, location}) => {
  const logoUrl = logo || 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={{uri: logoUrl}} resizeMode='contain' style={styles.logoImage} />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{job}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{name} /</Text>
        <View style={styles.locationBox}>
          <Image source={icons.location} resizeMode='contain' style={styles.locationImage} />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company