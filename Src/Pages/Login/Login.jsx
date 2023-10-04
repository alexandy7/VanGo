import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import Touchable from "../../Componentes/Touchable";
import MeuText from "../../Componentes/MeuText";
import styles from "./Login.modules";
import { GuardarToken, VerificarLogin, UserData, RemoverToken } from "../../services/Contexts/Contexts";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat"


export default function Login() {

  const [loading, setLoading] = useState(false);
  const [emailUsuario, setEmailUsuario] = useState('');
  const [senhaUsuario, setSenhaUsuario] = useState('');

  const navigation = useNavigation();

  async function VerificarLoginUsuario() {
    let usuarioLogado = await VerificarLogin();

    if (usuarioLogado) {

      if (usuarioLogado.id_cliente) {

        if (!usuarioLogado.turma_cliente) {
          navigation.navigate('SolicitarTurma');
          return;
        }

        navigation.navigate('AnexarPagamentos');
        return;
      }

      navigation.navigate('TabBarMotorista');
    }
  }

  async function login() {

    if (emailUsuario === '' || senhaUsuario === '') {
      console.log('todos os campos sao obrigatorios!');
      return;
    }

    const data = new URLSearchParams();
    data.append('Email', emailUsuario);
    data.append('Senha', senhaUsuario);

    setLoading(true);

    await axios.post("https://apivango.azurewebsites.net/api/Auth/Login", data.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    })

      .then((response) => {
        GuardarToken(response.data.token);
        console.log(response.data.token);
      })

      .then(() => {
        VerificarLoginUsuario();
      })

      .then(() => {
        setLoading(false);
      })


      .catch((error) => {
        console.log(`deu ruim aqui mane`, error);
        if (error.response) {
          // Se for uma resposta de erro HTTP
          console.log('Erro HTTP:', error.response.status, error.response.data);
        } else if (error.request) {
          // Se a solicitação não puder ser feita (por exemplo, problemas de rede)
          console.log('Erro na solicitação:', error.request);
        } else {
          // Se for um erro de outra natureza
          console.log('Erro desconhecido:', error.message);
        }
        setLoading(false);
      })
  }

  useEffect(() => {
    VerificarLoginUsuario();
  }, [])

  const [fonteLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_400Regular
  });

  if (!fonteLoaded) {
    return null;
  }

  return (
    <ScrollView>
      <View style={styles.geral}>

        <View style={styles.container}>
          <Image source={require('../../../assets/Logo.png')} style={styles.imagem} />
          <Text style={styles.titulo}>Bem vindo de volta</Text>
          <Text style={styles.msg}>Faça login para acessar sua conta</Text>
          <View style={styles.info}>
            <View style={styles.espacamento}>
              <MeuText icon='mail' nomePlaceholder={'Digite seu E-mail'} tipoInput='email-address' mudou={setEmailUsuario} />
            </View>
            <MeuText icon='lock-closed' nomePlaceholder={'Digite sua senha'} mudou={setSenhaUsuario} />
          </View>

          <TouchableOpacity onPress={() => { navigation.navigate("TabBarScreen") }}>

            <Text style={styles.esqueceSenha}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
          <View style={styles.BotaoComNovaConta}>
            {
              /*>>>>>>>>>> Após fazer login, aparecera animação de carregamento <<<<<<<<<<<*/
              loading ? (

                <Touchable texto={<ActivityIndicator color="white" />} />
              )
                :
                (
                  <Touchable texto={"Continuar"} evento={login} />

                )

            }
            <View style={styles.botaoNovaConta}>
              <Text style={styles.naoecadastrado}>Não é cadastrado? </Text>

              <TouchableOpacity onPress={() => { navigation.navigate('Cadastro') }}>

                <Text style={styles.novaConta}>Nova conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
