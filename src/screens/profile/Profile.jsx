import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useMMKVString} from 'react-native-mmkv';

const Profile = () => {
  const [token, setToken] = useMMKVString('token');

  const logOutEvent = () => {
    setToken('');
  };

  return (
    <View>
      <Text className="text-black">Profile</Text>

      <TouchableOpacity
        className="p-[10px] bg-red-500"
        onPress={() => {
          logOutEvent();
        }}>
        <Text className="text-white">Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
