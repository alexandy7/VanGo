import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { StatusBar } from 'expo-status-bar';
import AppNavigator from './Src/Navegacoes/Navegacoes';

export default function App() {
  
  return (
    
    <NavigationContainer>
    <AppNavigator/>
    <StatusBar hidden={true}/>
    </NavigationContainer>


  );
}
