import {NavigationContainer} from '@react-navigation/native';
import TabStack from './TabStack';
import AuthStack from './AuthStack';
import {useMMKVString} from 'react-native-mmkv';

const Navigation = () => {
  const [token, setToken] = useMMKVString('token');

  return (
    <NavigationContainer>
      {/* {token ? <TabStack /> : <AuthStack />} */}
      {true ? <TabStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
