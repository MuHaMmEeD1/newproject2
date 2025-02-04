import {Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const UserDetails = () => {
  const route = useRoute();
  const {user} = route.params;

  return (
    <View className="pt-[50px] gap-[20px]">
      <Text className="text-black text-center text-[20px]">{user.name}</Text>
      <Text className="text-black text-center">{user.email}</Text>
      <Text className="text-black text-center">{user.phone}</Text>
      <Text className="text-black text-center">
        {user.address.city} {user.address.street}
      </Text>
    </View>
  );
};

export default UserDetails;
