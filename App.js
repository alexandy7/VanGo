import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './Src/services/Navegacoes/NavegacoesCliente';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { AppRegistry, LogBox } from 'react-native';
LogBox.ignoreAllLogs();

export default function App() {

  //Estilizando o Toast
  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: 'green', height: 70 }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: '400'
        }}
        text2Style={{
          fontSize: 14
        }}
      />
    ),

    error: (props) => (
      <ErrorToast
        {...props}
        style={{borderLeftColor: 'red'}}
        text1Style={{
          fontSize: 20
        }}
        text2Style={{
          fontSize: 15
        }}
      />
    ),
  };

  return (
    <>
      <NavigationContainer>
        <AppNavigator />
        <StatusBar hidden={true} />
      </NavigationContainer>
      <Toast config={toastConfig}/>
    </>
  );
}
