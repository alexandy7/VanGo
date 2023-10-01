import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from "../../Pages/Login/Login";
import RecuperarSenha from '../../Pages/RecuperarSenha/RecuperarSenha';
import Cadastro from '../../Pages/Cadastro/Cadastro';
import CadastroEscola from '../../Pages/CadastroEscola/CadastroEscola';
import CadastroVeiculo from '../../PagesMotorista/CadastroVeiculo/CadastroVeiculo';
import ConfiguracaoMoto from "../../PagesMotorista/ConfiguracaoMotorista/ConfiguracaoMoto";
import ConfiguracaoCliente from "../../Pages/ConfiguracaoCliente/ConfiguracaoCliente";
import PerfilCliente from '../../Pages/PerfilCliente/PerfilCliente';
import PagamentoCliente from "../../Pages/PagamentoCliente/PagamentoCliente";
import NotificacaoMotorista from "../../PagesMotorista/NotificacaoMotorista/NotificacaoMotorista";
import HomeCliente from "../../Pages/HomeCliente/HomeCliente";
import EditarCliente from "../../Pages/EditarCliente/EditarCliente";
import SolicitacoesTurmaMotorista from "../../PagesMotorista/SolicitacoesTurmaMotorista/SolicitacoesTurmaMotorista";
import AnexarPagamentos from "../../Pages/AnexarPagamentos/AnexarPagamentos";
import Turmas from "../../PagesMotorista/Turmas/Turmas";
import SolicitarTurma from "../../Pages/SolicitarTurma/SolicitarTurma";
import NotificacaoCliente from "../../Pages/NotificacaoCliente/NotificacaoCliente";
import PagamentosMotorista from "../../PagesMotorista/PagamentosMotorista/PagamentosMotorista";
import Chat from "../../Pages/Chat/Chat";
import CriarTurmas from "../../PagesMotorista/CriarTurmas/CriarTurmas";
import TesteDoNotFound from "../../PagesMotorista/TesteDoNotFound/TesteDoNotFound";
import AdcionarFoto from "../../Pages/AdicionarFoto/AdicionarFoto";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabBarCliente() {
  return (
    <Tab.Navigator
    /* Estilizando tudo do Tab.Navigator */
    initialRouteName="HomeCliente"
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
          name="PagamentoCliente"
          component={PagamentoCliente}
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
        name="PerfilCliente"
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

function TabBarMotorista() {
  return (
    <Tab.Navigator
    /* Estilizando tudo do Tab.Navigator */
    initialRouteName="HomeCliente"
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
          name="PagamentoCliente"
          component={PagamentoCliente}
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
        name="PerfilCliente"
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
      <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
      <Stack.Screen name="AnexarPagamentos" component={AnexarPagamentos}  options={{headerShown: false}}/>
      <Stack.Screen name="Cadastro" component={Cadastro}  options={{headerShown: false}}/>
      <Stack.Screen name="CadastroEscola" component={CadastroEscola}  options={{headerShown: false}}/>
      <Stack.Screen name="Chat" component={Chat}  options={{headerShown: false}}/>
      <Stack.Screen name="ConfiguracaoCliente" component={ConfiguracaoCliente}  options={{headerShown: false}}/>
      
      <Stack.Screen name="HomeCliente" component={HomeCliente}  options={{headerShown: false}}/>
      <Stack.Screen name="NotificacaoCliente" component={NotificacaoCliente}  options={{headerShown: false}}/>
      <Stack.Screen name="PagamentoCliente" component={PagamentoCliente}  options={{headerShown: false}}/>
      <Stack.Screen name="PerfilCliente" component={PerfilCliente}  options={{headerShown: false}}/>
      <Stack.Screen name="EditarCliente" component={EditarCliente}  options={{headerShown: false}}/>
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha}  options={{headerShown: false}}/>
      <Stack.Screen name="SolicitarTurma" component={SolicitarTurma}  options={{headerShown: false}}/>
      <Stack.Screen name="AdicionarFoto" component={AdcionarFoto}  options={{headerShown: false}}/>
      <Stack.Screen name="TabBarCliente" component={TabBarCliente}  options={{headerShown: false}}/>


      <Stack.Screen name="CadastroVeiculo" component={CadastroVeiculo}  options={{headerShown: false}}/>
      <Stack.Screen name="ConfiguracaoMoto" component={ConfiguracaoMoto}  options={{headerShown: false}}/>
      <Stack.Screen name="NotificacaoMotorista" component={NotificacaoMotorista}  options={{headerShown: false}}/>
      <Stack.Screen name="PagamentosMotorista" component={PagamentosMotorista}  options={{headerShown: false}}/>
      <Stack.Screen name="SolicitacoesTurmaMotorista" component={SolicitacoesTurmaMotorista}  options={{headerShown: false}}/>
      <Stack.Screen name="Turmas" component={Turmas}  options={{headerShown: false}}/>
      <Stack.Screen name="TabBarMotorista" component={TabBarMotorista}  options={{headerShown: false}}/>
      <Stack.Screen name="CriarTurmas" component={CriarTurmas}  options={{headerShown: false}}/>
    </Stack.Navigator>
   
  );
}
