import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './Src/services/Navegacoes/NavegacoesCliente';
import AuthProvider from './Src/services/Contexts/Contexts';

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
