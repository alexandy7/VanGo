import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import Touchable from "../../Componentes/Common/Touchable";
import MeuText from "../../Componentes/Common/MeuText";
import Api from "../../services/Api";
import ConfigMoto from "../ConfigMoto/ConfigMoto"

export default function Login() {


    const [loading, setLoading] = useState(false);
    const [emailD, setEmailD] = useState('');
    const [senhaD, setSenhaD] = useState('');


    const navigation = useNavigation();

    async function Consulta() {
      setLoading(true)

         try {
             const resposta = await Api.get('LoginCliente', {
                 params: {
                     email: emailD,
                     senha: senhaD,
                 },
             });

             if (resposta != null) {
                navigation.navigate('TabBarScreen');
             }

         }

         catch (error) {
              setLoading(false);
             console.error('Erro na consulta:', error);
         }


    }

    const irEsqueceuSenha = () => {
      navigation.navigate(ConfigMoto);
        // navigation.navigate('RecuperarSenha')
    }
    const irCadastro = () => {
        navigation.navigate('Cadastro')
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
                <MeuText icon='mail' nomePlaceholder={'Digite seu E-mail'} tipoInput='email-address' valorInput={emailD} mudou={setEmailD} />
              </View>
              <MeuText icon='lock-closed' nomePlaceholder={'Digite sua senha'} valorInput={senhaD} mudou={setSenhaD} />
            </View>
            <TouchableOpacity onPress={irEsqueceuSenha}>
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
                <Touchable texto={"Continuar"} evento={Consulta}  />
                  
                )

              }
              <View style={styles.botaoNovaConta}>
                <Text>Não é cadastrado? </Text>
                <TouchableOpacity onPress={irCadastro}>
                  <Text style={styles.novaConta}>Nova conta</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      );
      }
      
      const styles = StyleSheet.create({

        geral: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center', // Adicione esta linha para centralizar verticalmente
        },
        
        container: {
          width: '80%',
          paddingTop: "30%", // Adicione este espaçamento superior
        },
        
        imagem: {
          alignSelf: 'center',
          width: '50%',
          height: 120,
        },
        titulo: {
          textAlign: 'center',
          fontSize: 25,
          marginTop: 20,
        },
        msg: {
          textAlign: 'center',
          fontSize: 13,
          color: 'rgb(145, 138, 138)',
          marginTop: 10,
        },
        info: {
          marginTop: 20,
        },
        espacamento: {
          marginBottom: 12,
        },
        esqueceSenha: {
          color: '#F7770D',
          alignSelf: 'center',
          marginTop: 30,
        },
        novaConta: {
          color: '#F7770D',
        },
        botaoNovaConta: {
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: 10,
        },
        BotaoComNovaConta: {
          marginTop: 20,
        },
      });
      