import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from "../Pages/Login/Login";
import RecuperarSenha from '../Pages/RecuperarSenha/RecuperarSenha';
import Cadastro from '../Pages/Cadastro/Cadastro';
import CadastroEscola from '../Pages/CadastroEscola/CadastroEscola';
import CadastroVeiculo from '../PagesMotorista/CadastroVeiculo/CadastroVeiculo';
import ConfigMoto from '../PagesMotorista/ConfigDoMoto/ConfigDoMoto';
import PerfilCliente from '../Pages/PerfilCliente/PerfilCliente';
import Pagamento from "../Pages/Pagamento/Pagamento";
import ConfigDoMoto from "../PagesMotorista/ConfigDoMoto/ConfigDoMoto";
import NotificaMoto from "../PagesMotorista/NotificacaoMotorista/NotificacaoMotorista";
import HomeCliente from "../Pages/HomeCliente/HomeCliente";
import EditarCliente from "../Pages/EditarCliente/EditarCliente";
import TelaSolicitacao from "../PagesMotorista/TelaSolicitacao/TelaSolicitacao";
import AnexarPagamentos from "../Pages/AnexarPagamentos/AnexarPagamentos";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabBarNavigator() {
  return (
    <Tab.Navigator
    /* Estilizando tudo do Tab.Navigator */
    initialRouteName="MeuPerfil"
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 60,
        bottom: 25,
        width: "90%",
        borderRadius: 15,
        zIndex: 1000,
        right: 20,
        left: 20,
        position: "absolute",
        elevation: 15
      }
    }}> 
        <Tab.Screen
          /* Estilizando cada elemento especifico do Tab.Navigator */
          name="Pagamento"
          component={Pagamento}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
  
              if (focused) {
                return <Icon name="attach-money" color={'#F7770D'} size={33} style={{
                  
                }

                }/> //Modo quando for clicado
              }
  
              return <Icon name="attach-money" color="rgba(0, 0, 0, 0.4)" size={33}/>//Modo quando não estiver clicado
            },
          }} 
          />

      <Tab.Screen
        name="HomeCliente"
        component={HomeCliente}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {

            if (focused) {
              return <Ionicons name="home" color={'#F7770D'} size={30} />
            }

            return <Ionicons name="home" color={"rgba(0, 0, 0, 0.3)"} size={30} />
          },
        }}
      />


      <Tab.Screen
        name="MeuPerfil"
        component={PerfilCliente}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {

            if (focused) {
              return <Ionicons name="person-sharp" color={'#F7770D'} size={30} />
            }

            return <Ionicons name="person-sharp" color={'rgba(0, 0, 0, 0.3)'} size={30} />

          },
        }}
      />

    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
   

    <Stack.Navigator>
      <Stack.Screen name="TelaSolicitacao" component={TelaSolicitacao}  options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
      <Stack.Screen name="TabBarScreen" component={TabBarNavigator}  options={{headerShown: false}}/>
      <Stack.Screen name="ConfigDoMoto" component={ConfigDoMoto}  options={{headerShown: false}}/>
      <Stack.Screen name="NotificaMoto" component={NotificaMoto}  options={{headerShown: false}}/>
      <Stack.Screen name="Cadastro" component={Cadastro}  options={{headerShown: false}}/>
      <Stack.Screen name="CadastroEscola" component={CadastroEscola}  options={{headerShown: false}}/>
      <Stack.Screen name="CadastroVeiculo" component={CadastroVeiculo}  options={{headerShown: false}}/>
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha}  options={{headerShown: false}}/>
      <Stack.Screen name="HomeCliente" component={HomeCliente}  options={{headerShown: false}}/>
      <Stack.Screen name="EditarCliente" component={EditarCliente}  options={{headerShown: false}}/>
      <Stack.Screen name="AnexarPagamentos" component={AnexarPagamentos}  options={{headerShown: false}}/>
    </Stack.Navigator>
   
  );
}
