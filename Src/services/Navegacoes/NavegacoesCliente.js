import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/MaterialIcons';


import CadastroCliente5 from "../../Pages/CadastroCliente5/CadastroCliente5";
import Login from "../../PagesGeral/Login/Login";
import RecuperarSenha from '../../Pages/RecuperarSenha/RecuperarSenha';
import CadastroEscola from '../../Pages/CadastroCliente3/CadastroCliente3';
import PerfilCliente from '../../Pages/PerfilCliente/PerfilCliente';
import ConfiguracaoCliente from "../../Pages/ConfiguracaoCliente/ConfiguracaoCliente";
import PagamentoCliente from "../../Pages/PagamentoCliente/PagamentoCliente";
import EditarCliente from "../../Pages/EditarCliente/EditarCliente";
import HomeCliente from "../../Pages/HomeCliente/HomeCliente";
import AnexarPagamentos from "../../Pages/AnexarPagamentos/AnexarPagamentos";
import SolicitarTurma from "../../Pages/SolicitarTurma/SolicitarTurma";
import NotificacaoCliente from "../../Pages//NotificacaoCliente/NotificacaoCliente";
import Chat from "../../PagesMotorista/Chat/Chat";
import ConversaChatCliente from "../../Pages/ConversaChatCliente/ConversaChatCliente";
import VisualizarMotorista from "../../Pages/VisualizarMotorista/VisualizarMotorista";
import VizualizarComprovante from "../../Pages/VizualizarComprovante/VizualizarComprovante";

import CadastroConcluido from "../../PagesGeral/CadastroConcluido/CadastroConcluido";
import TelaInicialCadastro from "../../PagesGeral/TelaInicialCadastro/TelaInicialCadastro";

import CadastrarClienteTurma from "../../PagesMotorista/CadastrarClienteTurma/CadastrarClienteTurma";
import CadastroVeiculo from '../../PagesMotorista/CadastroVeiculo/CadastroVeiculo';
import ConfiguracaoMoto from "../../PagesMotorista/ConfiguracaoMotorista/ConfiguracaoMoto";
import NotificacaoMotorista from "../../PagesMotorista/NotificacaoMotorista/NotificacaoMotorista";
import SolicitacoesTurmaMotorista from "../../PagesMotorista/SolicitacoesTurmaMotorista/SolicitacoesTurmaMotorista";
import Turmas from "../../PagesMotorista/Turmas/Turmas";
import PagamentosMotorista from "../../PagesMotorista/PagamentosMotorista/PagamentosMotorista";
import CriarTurmas from "../../PagesMotorista/CriarTurmas/CriarTurmas";
import PerfilMotorista from "../../PagesMotorista/PerfilMotorista/PerfilMotorista";
import HomeMotorista from "../../PagesMotorista/HomeMotorista/HomeMotorista";
import AceitarPagamento from "../../PagesMotorista/AceitarPagamento/AceitarPagamento";
import EditarMotorista from "../../PagesMotorista/EditarMotorista/EditarMotorista";
import VisualizarCliente from "../../PagesMotorista/VisualizarCliente/VisualizarCliente";
import RecusarSolicitacao from "../../PagesMotorista/RecusarSolicitacao/RecusarSolicitacao";
import ConversaChatMotorista from "../../PagesMotorista/ConversaChatMotorista/ConversaChatMotorista";
import CadastroCliente1 from "../../Pages/CadastroCliente1/CadastroCliente1";
import CadastroCliente2 from "../../Pages/CadastroCliente2/CadastroCliente2";
import CadastroCliente3 from "../../Pages/CadastroCliente3/CadastroCliente3";
import CadastroMotorista1 from "../../PagesMotorista/CadastroMotorista1/CadastroMotorista1";
import CadastroMotorista2 from "../../PagesMotorista/CadastroMotorista2/CadastroMotorista2";
import CadastroCliente4 from "../../Pages/CadastroCliente4/CadastroCliente4";
import CadastroMotorista3 from "../../PagesMotorista/CadastroMotorista3/CadastroMotorista3"
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

              } /> //Modo quando for clicado
            }

            return <Icon name="attach-money" color="rgba(0, 0, 0, 0.4)" size={33} />//Modo quando não estiver clicado
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
      initialRouteName="HomeMotorista"
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
        name="PagamentosMotorista"
        component={PagamentosMotorista}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {

            if (focused) {
              return <Icon name="attach-money" color={'#F7770D'} size={33} style={{

              }

              } /> //Modo quando for clicado
            }

            return <Icon name="attach-money" color="rgba(0, 0, 0, 0.4)" size={33} />//Modo quando não estiver clicado
          },
        }}
      />

      <Tab.Screen
        name="HomeMotorista"
        component={HomeMotorista}
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
        name="PerfilMotorista"
        component={PerfilMotorista}
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
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="AnexarPagamentos" component={AnexarPagamentos} options={{ headerShown: false }} />
      <Stack.Screen name="CadastroEscola" component={CadastroEscola} options={{ headerShown: false }} />
      <Stack.Screen name="CadastroConcluido" component={CadastroConcluido} options={{ headerShown: false }} />
      <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
      <Stack.Screen name="ConversaChatCliente" component={ConversaChatCliente} options={{ headerShown: false }} />
      <Stack.Screen name="ConfiguracaoCliente" component={ConfiguracaoCliente} options={{ headerShown: false }} />
      <Stack.Screen name="PerfilCliente" component={PerfilCliente} options={{ headerShown: false }} />
      <Stack.Screen name="HomeCliente" component={HomeCliente} options={{ headerShown: false }} />
      <Stack.Screen name="NotificacaoCliente" component={NotificacaoCliente} options={{ headerShown: false }} />
      <Stack.Screen name="PagamentoCliente" component={PagamentoCliente} options={{ headerShown: false }} />
      <Stack.Screen name="VisualizarMotorista" component={VisualizarMotorista} options={{ headerShown: false }} />
      <Stack.Screen name="EditarCliente" component={EditarCliente} options={{ headerShown: false }} />
      <Stack.Screen name="TelaInicialCadastro" component={TelaInicialCadastro} options={{ headerShown: false }} />
      <Stack.Screen name="CadastroCliente4" component={CadastroCliente4} options={{ headerShown: false }} />
      <Stack.Screen name="CadastroCliente1" component={CadastroCliente1} options={{ headerShown: false }} />
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ headerShown: false }} />
      <Stack.Screen name="SolicitarTurma" component={SolicitarTurma} options={{ headerShown: false }} />
      <Stack.Screen name="CadastroCliente2" component={CadastroCliente2} options={{ headerShown: false }} />
      <Stack.Screen name="CadastroCliente3" component={CadastroCliente3} options={{ headerShown: false }} />
      <Stack.Screen name="CadastroCliente5" component={CadastroCliente5} options={{ headerShown: false }} />
      <Stack.Screen name="TabBarCliente" component={TabBarCliente} options={{ headerShown: false }} />
      <Stack.Screen name="VisualizarCliente" component={VisualizarCliente} options={{ headerShown: false }} />
      <Stack.Screen name="PerfilMotorista" component={PerfilMotorista} options={{ headerShown: false }} />
      <Stack.Screen name="CadastroVeiculo" component={CadastroVeiculo} options={{ headerShown: false }} />
      <Stack.Screen name="ConfiguracaoMoto" component={ConfiguracaoMoto} options={{ headerShown: false }} />
      <Stack.Screen name="VizualizarComprovante" component={VizualizarComprovante} options={{ headerShown: false }} />
      <Stack.Screen name="NotificacaoMotorista" component={NotificacaoMotorista} options={{ headerShown: false }} />
      <Stack.Screen name="PagamentosMotorista" component={PagamentosMotorista} options={{ headerShown: false }} />
      <Stack.Screen name="SolicitacoesTurmaMotorista" component={SolicitacoesTurmaMotorista} options={{ headerShown: false }} />
      <Stack.Screen name="Turmas" component={Turmas} options={{ headerShown: false }} />
      <Stack.Screen name="TabBarMotorista" component={TabBarMotorista} options={{ headerShown: false }} />
      <Stack.Screen name="CriarTurmas" component={CriarTurmas} options={{ headerShown: false }} />
      <Stack.Screen name="HomeMotorista" component={HomeMotorista} options={{ headerShown: false }} />
      <Stack.Screen name="AceitarPagamento" component={AceitarPagamento} options={{ headerShown: false }} />
      <Stack.Screen name="EditarMotorista" component={EditarMotorista} options={{ headerShown: false }} />
      <Stack.Screen name="RecusarSolicitacao" component={RecusarSolicitacao} options={{ headerShown: false }} />
      <Stack.Screen name="CadastrarClienteTurma" component={CadastrarClienteTurma} options={{ headerShown: false }} />
      <Stack.Screen name="ConversaChatMotorista" component={ConversaChatMotorista} options={{ headerShown: false }} />
      <Stack.Screen name="CadastroMotorista1" component={CadastroMotorista1} options={{ headerShown: false }} />
      <Stack.Screen name="CadastroMotorista2" component={CadastroMotorista2} options={{ headerShown: false }} />
      <Stack.Screen name="CadastroMotorista3" component={CadastroMotorista3} options={{ headerShown: false }} />
    </Stack.Navigator>

  );
}
