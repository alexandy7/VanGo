import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AppNavigator from './Src/Navegacoes/Navegacoes';

const Stack = createStackNavigator();
export default function App() {
  
  return (
    
    <NavigationContainer>
    <AppNavigator/>
    </NavigationContainer>


  );
}
