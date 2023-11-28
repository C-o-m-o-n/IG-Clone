import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function MediaScreen () {
  return (
    <View style={tw`flex-1 justify-center p-4 items-center android:pt-2 bg-blue dark:bg-black`}>
      <Text style={tw`text-md text-black dark:text-white`}>The Media Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

