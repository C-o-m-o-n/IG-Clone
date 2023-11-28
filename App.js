import { SafeAreaView, } from 'react-native';
import MyStack from './Navigation';

export default function App() {
  return ( 
	  <SafeAreaView style={{
    flex: 1,
    justifyContent: 'center',
  }}>
     
		<MyStack />

		</ SafeAreaView>
  )}

