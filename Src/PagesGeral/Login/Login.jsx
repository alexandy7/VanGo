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
import showToast from "../../services/Toast/Toast";


export default function Login() {

  const [loading, setLoading] = useState(false);
  const [emailUsuario, setEmailUsuario] = useState('');
  const [senhaUsuario, setSenhaUsuario] = useState('');
  const [erro, setErro] = useState(false);
  const navigation = useNavigation();

  async function VerificarQuemE() {
    let usuarioLogado = await VerificarLogin();

    if (usuarioLogado) {

      setEmailUsuario('');
      setSenhaUsuario('');

      if (usuarioLogado.id_cliente) {

        if (usuarioLogado.turma_cliente === "") {
          navigation.navigate('SolicitarTurma');
          return;
        };

        navigation.replace('TabBarCliente');
        return;
      }

      navigation.replace('TabBarMotorista');
    }


  }

  async function login() {

    if (emailUsuario === '' || senhaUsuario === '') {
      showToast('error', 'Vazio', 'Preencha todos os campos!');
      return;
    }

    try {

      const data = new URLSearchParams();
      data.append('Email', emailUsuario.trim());
      data.append('Senha', senhaUsuario.trim());

      setLoading(true);
      const inicio = performance.now();

      await axios.post("https://apivango.azurewebsites.net/api/Auth/Login", data.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      })

        .then((response) => {
          const fim = performance.now();

          console.log(fim - inicio);
          GuardarToken(response.data.token);
        })

        .then(() => {
          showToast("success", "Login bem-sucedido!", "Aproveite o app.", 1200);
          setTimeout(() => {
            VerificarQuemE();
          }, 800)
        })

        .then(() => {
          setLoading(false);
        })


        .catch((error) => {
          setErro(true);
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
    catch (error) {
      console.log(error);
      setErro(true);
    }
  };

  useEffect(() => {

    async function WarUp(){
      await axios.get('https://apivango.azurewebsites.net/api/Auth/WarmUp')
    };
    WarUp();

    VerificarQuemE();
  }, []);

  const [fonteLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_400Regular
  });

  if (!fonteLoaded) {
    return null;
  };

  return (
    <ScrollView>
      <View style={styles.geral}>

        <View style={styles.container}>
          <Image source={require('../../../assets/Logo.png')} style={styles.imagem} />
          <Text style={styles.titulo}>Bem vindo de volta</Text>
          <Text style={styles.msg}>Faça login para acessar sua conta</Text>
          <View style={styles.info}>
            <View style={styles.espacamento}>
              <MeuText
                icon='mail'
                nomePlaceholder={'Digite seu E-mail'}
                tipoInput='email-address'
                valorInput={emailUsuario}
                mudou={(text) => {
                  setEmailUsuario(text);
                  setErro(false);
                }} />
            </View>
            <MeuText icon='lock-closed' nomePlaceholder={'Digite sua senha'} mudou={setSenhaUsuario} valorInput={senhaUsuario} />
          </View>
          {erro && <Text style={{ color: "red", alignSelf: "center", top: 10 }}>Email e/ou senha incorretos</Text>}
          <TouchableOpacity onPress={() => {
            setEmailUsuario('tioivan@gmail.com');
            setSenhaUsuario('tioivan');
          }}>

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
                  <Touchable texto={"Continuar"} evento={() => login()} />

                )

            }
            <View style={styles.botaoNovaConta}>
              <Text style={styles.naoecadastrado}>Não é cadastrado? </Text>

              <TouchableOpacity onPress={() => { navigation.navigate('TelaInicialCadastro') }}>

                <Text style={styles.novaConta}>Nova conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
