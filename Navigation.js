import { AntDesign, Entypo, FontAwesome5, Octicons, Ionicons, MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import StatusScreen from './Screens/StatusScreen';
import LoginScreen from './Screens/LoginScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {

	const screenOptionStyle = {

		tabBarStyle: { backgroundColor: "teal"}, 
};


  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen name="Home" component={HomeScreen}
	   options={{
          headerShown: false,
        
          tabBarIcon: ({ focused }) =>
            focused ? (
				<MaterialIcons name="home-filled" size={26} color="red" />
            ) : (
              <Octicons name="home" size={20} color="black" />

            ),
        }}
	  /> 
      <Tab.Screen name="Status" component={StatusScreen}
options={{
          headerShown: false,
          
          tabBarIcon: ({ focused }) =>
            focused ? (
    	<Ionicons name="add-circle" size={24} color="red" />
            ) : (
    	<Ionicons name="add-circle-outline" size={24} color="black" />
            ),
        }}

	  />
	  <Tab.Screen name="Profile" component={ProfileScreen}
options={{
          headerShown: false,
          
          tabBarIcon: ({ focused }) =>
            focused ? (
				<FontAwesome5 name="user-circle" size={24} color="red" />
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
