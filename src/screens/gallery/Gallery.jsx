import {Text, View, TouchableOpacity, Platform, Image} from 'react-native';
import {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {request, check, PERMISSIONS, RESULTS} from 'react-native-permissions';

const Gallery = () => {
  const os = Platform.OS;
  const [selectedImage, setSelectedImage] = useState(null);

  const handleGalleryOpen = async () => {
    console.log('test 1');

    const permission =
      os === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : Platform.Version >= 33
        ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
        : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;

    const status = await check(permission);
    console.log('test 2:', status);

    if (status !== RESULTS.GRANTED) {
      const newStatus = await request(permission);
      if (newStatus !== RESULTS.GRANTED) {
        console.log('Permission denied');
        return;
      }
    }

    console.log('test 3: Launching image picker');
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (
        !response.didCancel &&
        response.assets &&
        response.assets.length > 0
      ) {
        setSelectedImage(response.assets[0].uri);
      }
    });

    console.log('test finis');
  };

  return (
    <View className="flex-1 justify-center items-center p-4">
      {selectedImage && (
        <Image
          style={{width: 200, height: 200}}
          source={{uri: selectedImage}}
        />
      )}

      <TouchableOpacity
        onPress={handleGalleryOpen}
        className="w-full bg-blue-950 py-3 mt-4 rounded-lg">
        <Text className="text-white text-center">Select an image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Gallery;
