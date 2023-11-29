import {Image, View, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';


export default function OnlineUser({imageSource, name, isYou}){
	return(
		<View style={tw `flex-col align-center items-center justify-center`}>
		{isYou == true ? (
			<View style={tw ` h-20 w-20 mx-1 rounded-full p-1`} >
	<Image style={tw `h-full w-full  rounded-full`} source={imageSource} />

<Ionicons style={tw `bg-white rounded-full p-1 top-11 left-13 absolute`} name="add-outline" size={17} color="black" />
			</View>
		) : (
		
		<View style={tw ` h-20 w-20 mx-1 rounded-full border-[#ff8d00] border-[5px] p-1`} >
		<Image style={tw `h-full w-full  rounded-full`} source={imageSource} />
		
		</View>
		)
		}


	<Text style={tw `text-[13px]`}>{name}</Text>
		

		</View>

		
	)};
