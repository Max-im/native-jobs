import { useSttate } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { useFetch } from '../../../hook/useFetch';

import styles from './popularjobs.style'
import { SIZES, COLORS } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  const router = useRouter();

  const {error, isLoading, data} = useFetch('search', {
    query: 'React developer',
    num_pages: 1,
    page: 1,
    page_size: 10,
    sort_by: 'relevance',
    job_type: 'full_time',
    location: 'United States',
  });
  
  console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading && <ActivityIndicator size='large' color={COLORS.primary} />}
        {error && <Text style={styles.headerBtn}>Something went wrong</Text>}
        {!error && !isLoading && (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                key={item?.job_id}
                selectedJob={item?.job_id}
                handleNavigate={() => router.push(`/job-details/${item?.job_id}`)}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs