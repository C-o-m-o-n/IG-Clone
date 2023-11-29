import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import OnlineUser from '../Components/OnlineUser';
import girl2 from '../assets/images/girl2.jpg';
import girl3 from '../assets/images/girl3.jpg';
import girl4 from '../assets/images/girl4.jpg';
import girl5 from '../assets/images/girl5.jpeg';
import man1 from '../assets/images/man1.jpeg';
import PostItem from '../Components/PostItem';


export default function HomeScreen () {
  return (
	  <ScrollView style={tw`flex-1 bg-[#fff0d0]`}>
    <View style={tw`felx android:pt-2 dark:bg-black`}>
	  <View style={tw`flex flex-row justify-between mx-3 my-3`}>
      <Text style={tw`text-2xl text-black dark:text-white`}>Instagram</Text>
	  
	  <View style={tw `flex-row gap-2`}>
	  <Ionicons name="heart-outline" size={24} color="black" />
	  <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
      </View>
    </View>

<View style={tw `flex-row`}>
	  <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}>
<OnlineUser imageSource={man1} name="You" isYou={true}/>  
 <OnlineUser imageSource={girl3} name="Rose" isYou={false}/>
<OnlineUser imageSource={girl4} name="RoseMary" isYou={false}/> 
<OnlineUser imageSource={girl5} name="Jannet" isYou={false}/> 
<OnlineUser imageSource={man1} name="Antonet" isYou={false}/> 
<OnlineUser imageSource={girl3} name="Rose" isYou={false}/> 
<OnlineUser imageSource={girl3} name="Rose" isYou={false}/> 
<OnlineUser imageSource={girl3} name="Rose" isYou={false}/> 
	  </ScrollView>
	  
	  </View>

<PostItem imageSource={girl5}/>

<PostItem imageSource={girl2}/>
<PostItem imageSource={man1}/>
<PostItem imageSource={girl3}/>
	  </View>
	  </ScrollView>
  );
}
