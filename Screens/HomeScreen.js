import { SafeAreaView, Text, View } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen () {
  return (
	  <SafeAreaView style={tw`flex-1 bg-white`}>
    <View style={tw`felx android:pt-2 dark:bg-black`}>
	  <View style={tw`flex flex-row justify-between mx-3`}>
      <Text style={tw`text-2xl text-black dark:text-white font-roboto`}>Instagram</Text>
	  
	  <View style={tw`flex-row mr-3`}>
	  <Ionicons name="heart-outline" style={tw`mx-3`}  size={24} color="black" />
	  <Ionicons name="chatbubble-ellipses-outline" style={tw`mx-3`} size={24} color="black" />
      </View>
	  
	  </View>
    </View>
	  </SafeAreaView>
  );
}

