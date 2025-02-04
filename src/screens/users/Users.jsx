import {
  View,
  Text,
  ScrollView,
  FlatList,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import UserCard from './components/UserCard';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Users = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      const data = response.data;

      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ScrollView>
      <View className="h-full gap-4 p-5">
        <FlatList
          ListHeaderComponent={() => (
            <Text className="text-3xl text-black">Users</Text>
          )}
          scrollEnabled={false}
          contentContainerStyle={{
            gap: 16,
          }}
          data={users}
          keyExtractor={item => item.id}
          renderItem={({item}) => <UserCard user={item} />}
          ListEmptyComponent={() => (
            <View className="items-center justify-center w-full pt-[100px]">
              <Text>Not found items</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Users;
