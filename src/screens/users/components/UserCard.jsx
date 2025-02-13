import {Text, TouchableOpacity, Platform, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const UserCard = ({user}) => {
  const navigation = useNavigation();
  const os = Platform.OS;
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const scale = Dimensions.get('window').scale;

  const textSize = Math.floor(24 / scale);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('UserDetails', {user: user});
      }}
      className={`p-4 border-[1px] border-zinc-300 rounded-md bg-white shadow ${
        os == 'ios' ? 'shadow-zinc-300' : 'shadow-zinc-700'
      }`}>
      <Text className="text-black bold font-bold" style={{textSize: textSize}}>
        {user.name}
      </Text>
      <Text className="text-black" style={{textSize: textSize}}>
        {user.email}
      </Text>
      <Text className="text-black" style={{textSize: textSize}}>
        {user.phone}
      </Text>
    </TouchableOpacity>
  );
};

export default UserCard;
