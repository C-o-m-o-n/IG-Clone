import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons,  FontAwesome5, Octicons, Ionicons, MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import StatusScreen from './Screens/StatusScreen';
// import LoginScreen from './Screens/LoginScreen';
import MediaScreen from './Screens/MediaScreen';
import SearchScreen from './Screens/SearchScreen';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {

	const screenOptionStyle = {

		tabBarStyle: { height: "80px"}, 
};


  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen name="Home" component={HomeScreen}
	   options={{
          headerShown: false, 
			   tabBarShowLabel: false,

          tabBarIcon: ({ focused }) =>
            focused ? (
				<MaterialIcons name="home-filled" size={26} color="#ff8d00" />
            ) : (
              <Octicons name="home" size={20} color="black" />

            ),
        }}
	  />
  <Tab.Screen name="Search" component={SearchScreen}
	   options={{
          headerShown: false, 
			   tabBarShowLabel: false,

          tabBarIcon: ({ focused }) =>
            focused ? (

<Ionicons name="ios-search-circle" size={26} color="#ff8d00" />
            ) : (
<Ionicons name="ios-search" size={20} color="black" />

            ),
        }}
	  />
	        <Tab.Screen name="Status" component={StatusScreen}
	  options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
    	<Ionicons name="add-circle" size={24} color="#ff8d00" />
            ) : (
    	<Ionicons name="add-circle-outline" size={24} color="black" />
            ),
        }}

	  />


 <Tab.Screen name="Media" component={MediaScreen}
	  options={{
          headerShown: false,
           tabBarShowLabel: false,

          tabBarIcon: ({ focused }) =>
            focused ? (

				<MaterialCommunityIcons name="movie-filter" size={24} color="#ff8d00" />

            ) : (
				<MaterialCommunityIcons name="movie-filter-outline" size={24} color="black" />

				
            ),
        }}

	  />


	  <Tab.Screen name="Profile" component={ProfileScreen}
options={{
          headerShown: false,
           tabBarShowLabel: false,

          tabBarIcon: ({ focused }) =>
            focused ? (
<FontAwesome name="user-circle-o" size={24} color="#ff8d00" />

            ) : (
	<FontAwesome5 name="user-circle" size={24} color="black" />
				
            ),
        }}

	  />

    </Tab.Navigator>
  );
}

export default function MyStack() {
  return (
	  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MyTabs}
	  options={{headerShown:false,
	  }} />
	  </Stack.Navigator>
	  </NavigationContainer>
  );
}
