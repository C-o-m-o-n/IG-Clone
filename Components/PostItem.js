import {Image, View, Text,  Dimensions} from 'react-native';
import { Ionicons, MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons';
import tw from 'twrnc';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function PostItem({imageSource,}){
	return(
		<View style={tw `bg-white align-center rounded w-[93%] m-3`}>
		<View style={tw` flex-row justify-between align-center items-center ml-3 mr-3 my-3`}>

		<View style={tw` flex-row justify-between align-center items-center `}>
		<Image style={tw `h-10 w-10 rounded-full mx-2 `} source={imageSource} />
		<Text>wrejw.eriojjer.ieghie</Text>
		<AntDesign style={tw `mx-2`} name="checkcircle" size={13} color="blue" />
		</View>

		<AntDesign name="ellipsis1" size={24} color="black" />
		</View>

<View style={tw ` flex align-center justify-center items-center`}>
			<Image style={tw `h-80 w-[90%] rounded-4 `} source={imageSource} />
	</View>	




<View style={tw` flex-row justify-between align-center items-center ml-3 mr-3 my-3`}>

		<View style={tw` flex-row justify-between align-center items-center `}>
		
	  <Ionicons name="heart-outline" size={24} color="black" />

	  <Ionicons style={tw `ml-4`}  name="chatbubble-outline" size={24} color="black" />
<Feather style={tw `ml-4`} name="send" size={24} color="black" />
		</View>
<MaterialCommunityIcons name="bookmark-minus-outline" size={24} color="black" />

		</View>
<View>
		<Text>wrejw.eriojjer.ieghie</Text>
		<AntDesign style={tw `mx-2`} name="checkcircle" size={13} color="blue" />

		<Text>We have a very strong team, and I believe we can work on a solution if we put our minds and effort to it</Text>
		</View>
		</View>

		
	)};
