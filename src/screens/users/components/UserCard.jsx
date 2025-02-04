import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const UserCard = ({user}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('UserDetails', {user: user});
      }}
      className="p-4 border-[1px] border-zinc-300 rounded-md bg-white shadow shadow-zinc-700">
      <Text className="text-black bold font-bold">{user.name}</Text>
      <Text className="text-black">{user.email}</Text>
      <Text className="text-black">{user.phone}</Text>
    </TouchableOpacity>
  );
};

export default UserCard;
