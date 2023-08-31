import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './Src/Navegacoes/Navegacoes';
import AuthProvider from './Src/Contexts/Contexts';

export default function App() {

  return (

    <NavigationContainer>

      <AuthProvider>
        <AppNavigator/>
        <StatusBar hidden={true} />
      </AuthProvider>

    </NavigationContainer>


  );
}
