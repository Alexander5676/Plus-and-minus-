import 'react-native-gesture-handler'; import { Stack } from 'expo-router'; import { StatusBar } from 'expo-status-bar'; import { AppProvider } from '../src/store/AppProvider';
export default function Layout(){return <AppProvider><StatusBar style="dark"/><Stack screenOptions={{headerShown:false,animation:'fade'}}/></AppProvider>}
