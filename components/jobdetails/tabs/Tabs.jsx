import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style';
import { SIZES } from '../../../constants';

function TabButton({ name, activeTab, onClick }) {
  return (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onClick}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
}

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (<TabButton name={item} activeTab={activeTab} onClick={() => setActiveTab(item)} />)}
        horizontal
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  )
}

export default Tabs