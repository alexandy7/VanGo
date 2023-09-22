import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './Src/services/Navegacoes/NavegacoesCliente';

export default function App() {

  return (

    <NavigationContainer>
        <AppNavigator/>
        <StatusBar hidden={true} />
    </NavigationContainer>

  );
}
