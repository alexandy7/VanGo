import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import Touchable from "../../Componentes/Touchable";
import MeuText from "../../Componentes/MeuText";
import Api from "../../services/ApiCiente";
import ConfigMoto from "../ConfiguracaoMotorista/ConfiguracaoMotorista"
import styles from "./Login.modules";
import { AuthContext } from "../../Contexts/Contexts";

export default function Login() {

  const { Consulta } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [emailUsuario, setEmailUsuario] = useState('');
  const [senhaUsuario, setSenhaUsuario] = useState('');


  const navigation = useNavigation();

  const data = {
    email: emailUsuario,
    senha: senhaUsuario
  }

  async function lala(){
    setLoading(true);
    await Consulta({data});
    setLoading(false);
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
                  <Touchable texto={"Continuar"} evento={lala} />

                )

            }
            <View style={styles.botaoNovaConta}>
              <Text>Não é cadastrado? </Text>

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
