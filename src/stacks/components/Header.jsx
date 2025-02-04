import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ArrowLeft} from 'lucide-react-native';

const Header = () => {
  const navigation = useNavigation();
  const routes = navigation.getState().routes;
  const routeName = routes[routes.length - 1].name;

  if (!navigation.canGoBack()) {
    return null;
  }

  return (
    <View className="flex-row items-center justify-between px-4 py-3 bg-white shadow-md rounded-b-2xl">
      <TouchableOpacity
        hitSlop={10}
        onPress={() => navigation.goBack()}
        className="p-2 rounded-full bg-gray-200">
        <ArrowLeft size={24} color="black" />
      </TouchableOpacity>

      <Text className="text-xl font-semibold text-black">{routeName}</Text>

      <View className="w-10" />
    </View>
  );
};

export default Header;
