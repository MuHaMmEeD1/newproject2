import {Text, View, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import Input from './components/Input';
import axios from 'axios';
import {useMMKVString} from 'react-native-mmkv';
import Lemon from '../../../assets/icons/lemon.svg';

const Login = () => {
  const [formData, setFormData] = useState({});
  const [token, setToken] = useMMKVString('token');

  const login = async () => {
    console.log('test 2');
    try {
      console.log('test 3');
      console.log(formData);
      const response = await fetch(
        'http://172.20.10.20:5001/api/v1/auth/login',

        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        },
      );
      const data = await response.json();
      console.log('test 4');

      console.log(data);

      //console.log(response.data);
      // console.log(response == null ? 'null' : 'no null');

      // console.log(response.data.token);
      // setToken(response.data.token);
    } catch (error) {
      console.log('catch test');
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <View className="h-full p-5 gap-4 justify-center">
      <Lemon></Lemon>
      <Text className="text-4xl text-black text-center mb-3">Login</Text>
      <Text className="text-4xl text-black text-center mb-3 montserratLight">
        Login
      </Text>

      <Input
        name="email"
        setFormData={setFormData}
        value={formData?.email}
        placeholder="Enter your email"
      />

      <Input
        name="password"
        setFormData={setFormData}
        value={formData?.password}
        placeholder="Enter your password"
      />

      <TouchableOpacity
        onPress={() => {
          console.log('test');
          login();
        }}
        className="bg-blue-700 py-6">
        <Text className="text-center text-white text-xl">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
