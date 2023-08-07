import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Pages/Login/Login";
import Cadastro from '../Pages/Cadastro/Cadastro';
import CadastroEscola from '../Pages/CadastroEscola/CadastroEscola';
import CadastroVeiculo from '../Pages/CadastroVeiculo/CadastroVeiculo';
import ConfigMoto from '../Pages/ConfigMoto/ConfigMoto';
import RecuperarSenha from '../Pages/RecuperarSenha/RecuperarSenha';
import PerfilCliente from '../Pages/PerfilCliente/PerfilCliente';
import Home from "../Pages/Home/Home";
import Pagamento from "../Pages/Pagamento/Pagamento";
import { Ionicons } from '@expo/vector-icons'
import { View, StyleSheet, Text, Image } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabBarNavigator() {
  return (
    <Tab.Navigator
    /* Estilizando tudo do Tab.Navigator */
      initialRouteName="MeuPerfil"
      screenOptions={{
        tabBarStyle: {
          height: 60,
          bottom: 10,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          backgroundColor: 'rgb(250, 250, 250)',
          elevation: 0,
          color: "red",
          justifyContent: 'center',
        }
      }}> 
          {/* Estilizando cada elemento especifico do Tab.Navigator */}
        <Tab.Screen
          name="Pagamento"
          component={Pagamento}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
  
              if (focused) {
                return <Ionicons name="stats-chart" color={'#F7770D'} size={30} /> //Modo quando for clicado
              }
  
              return <Ionicons name="stats-chart-outline" color={'rgba(0, 0, 0, 0.3)'} size={30} /> //Modo quando não estiver clicado
            },
  
            tabBarLabel: ({ color, focused, fontSize }) => (
              <Text style={{ color: focused ? '#F7770D' : color, fontSize: 11, bottom: 7 }}>Pagamento</Text>
            )
          }} 
          />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {

            if (focused) {
              return <Ionicons name="home" color={'#F7770D'} size={30} />
            }

            return <Ionicons name="home" color={"rgba(0, 0, 0, 0.3)"} size={30} />
          },

          tabBarLabel: ({ color, focused }) => (
            <Text style={{ color: focused ? '#F7770D' : color, fontSize: 11, bottom: 7 }}>Home</Text>
          )
        }}
      />


      <Tab.Screen
        name="MeuPerfil"
        component={PerfilCliente}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {

            if (focused) {
              return <Ionicons name="person" color={'#F7770D'} size={30} />
            }

            return <Ionicons name="person-outline" color={"rgba(0, 0, 0, 0.3)"} size={30} />
          },
          tabBarLabel: ({ color, focused }) => (
            <Text style={{ color: focused ? '#F7770D' : color, fontSize: 11, bottom: 7 }}>Meu perfil</Text>
          )

        }}
      />

    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabBarScreen" component={TabBarNavigator} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro}/>
      <Stack.Screen name="CadastroEscola" component={CadastroEscola}/>
      <Stack.Screen name="CadastroVeiculo" component={CadastroVeiculo} />
      <Stack.Screen name="ConfigMoto" component={ConfigMoto} />
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
      
    </Stack.Navigator>
  );
}
