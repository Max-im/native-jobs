import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useFetch } from '../../../hook/useFetch';
import { useRouter } from 'expo-router'

import styles from './nearbyjobs.style';
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

const Nearbyjobs = () => {
  const router = useRouter();

  const { error, isLoading, data } = useFetch('search', {
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
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading && <ActivityIndicator size='large' color={COLORS.primary} />}
        {error && <Text style={styles.headerBtn}>Something went wrong</Text>}
        {!error && !isLoading && (
          data?.map((job) => (
            <NearbyJobCard
              item={job}
              key={job?.job_id}
              handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
              style={{ marginBottom: 10 }}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs