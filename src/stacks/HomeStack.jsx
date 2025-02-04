import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import Users from '../screens/users/Users';
import Todos from '../screens/todos/Todos';
import Header from './components/Header';
import UserDetails from '../screens/users/UserDetails';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <View className="bg-white border-b border-gray-200 shadow-sm">
            <Header />
          </View>
        ),
        animation: 'fade',
      }}>
      <Stack.Screen
        name="Users"
        component={Users}
        options={{animation: 'slide_from_right'}}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetails}
        options={{animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="Todos"
        component={Todos}
        options={{animation: 'fade_from_bottom'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
