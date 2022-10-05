import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import Header from './components/layouts/Header'
import MoviesContainer from './components/containers/MoviesListContainer';
import AppStack from './components/stacks/AppStack'
export default function App() {
  return (
    <NativeBaseProvider>
      {/* <Header></Header> */}
      <AppStack />

      <StatusBar style="auto" />

    </NativeBaseProvider>
  );
}



