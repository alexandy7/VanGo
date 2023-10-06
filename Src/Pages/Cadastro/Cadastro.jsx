import { Text, View, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import MeuText from "../../Componentes/MeuText";
import TituloCadastro from '../../Componentes/Titulocadastros';
import Touchable from "../../Componentes/Touchable";
import Api from "../../services/Api/ApiCiente";
import styles from "./Cadastro.modules";
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import ApiCliente from "../../services/Api/ApiCiente";
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"


export default function Cadastro() {
  const [loading, setLoading] = useState(false);

  const [button1Color, setButton1Color] = useState('#F7770D'); // cor inicial do botão 1
  const [button2Color, setButton2Color] = useState('#C4C4C433'); // cor inicial do botão 2

  const [button1letra, setButton1letra] = useState('white'); // cor inicial da letra botão 1
  const [button2letra, setButton2letra] = useState('grey'); // cor inicial da letra botão 2

  const [placeholder1, setplaceholder1] = useState('Nome completo (responsável)'); // Texto inicial

  const [placeholderhr, setplaceholderhr] = useState('Nome completo (dependente)');

  const [imghr, setImghr] = useState('person');

  const [quemE, setQuemE] = useState('cliente');

  const [nomeOuHr, setNomeOuHr] = useState('default');

  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cpf, setCpf] = useState('');
  const [nomeOuHorario, setnomeOuHorario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [base64, setBase64] = useState(null)

  const [motoristaOuCliente, setMotoristaOuCliente] = useState('cliente');

  const botaoCliente = () => {
    setButton1Color('#F7770D');
    setButton2Color('#C4C4C433');

    setButton1letra('white');
    setButton2letra('grey');

    setplaceholder1('Nome completo (responsável) ');

    setplaceholderhr('Nome completo (dependente)');

    setImghr(require('../../../assets/profile.png'));

    setQuemE('cliente');

    setNomeOuHr('default');

    setImghr('person');

    setMotoristaOuCliente('cliente');


  };

  const botaoMoto = () => {
    setButton1Color('#C4C4C433');
    setButton2Color('#F7770D');

    setButton2letra('white');
    setButton1letra('grey');

    setplaceholder1('Nome completo ');

    setplaceholderhr('Hora de atuação');

    setImghr(require('../../../assets/clock.png'));

    setQuemE('motorista');

    setNomeOuHr('numeric');

    setImghr('time');

    setMotoristaOuCliente('motorista');


  };
  //☝️ Lógica para caso estar no cadastro do motorista ou cliente mudar o placeholder e o tipo do input

  const navigation = useNavigation();

  // const continuarCadastro = () => {

  //   if (quemE == 'cliente') {
  //     navigation.navigate('CadastroEscola');
  //   }

  //   if (quemE == 'motorista') {
  //     navigation.navigate('CadastroVeiculo');
  //   };
  // };
  // //☝️ está fazendo a lógica para qual pagina navegar


  // async function CadastrarCliente() {

  //   setLoading(true);
  //   if (motoristaOuCliente == 'cliente') {

  //     try {
  //       // navigation.navigate('CadastroEscola');
  //       const resposta = await axios.post('https://localhost:7149/api/Cliente/CadastrarCliente', {
  //         Email_cliente: email,
  //         Senha_cliente: senha,
  //         Nome_cliente: nome,
  //         Base64: base64,
  //         Cpf_responsavel: cpf,
  //         Endereco_cliente: endereco,
  //         Responsavel_cliente: nomeOuHorario,
  //       });


  //       if (resposta != null) {
  //         navigation.navigate('Login');
  //       } else {
  //         console.log('Usuário não encontrado');
  //       }
  //     }

  //     catch (error) {
  //       console.error('Erro na consulta:', error);
  //     }
  //   }

  //   else {

  //     try {
  //       const resposta = await Api.post('InserirMotorista', {
  //         NOME_MOTORISTA: nome,
  //         ENDRECO_MOTORISTA: nomeOuHorario,
  //         CPF_MOTORISTA: cpf,
  //         ENDERECO_CLIENTE: endereco,
  //         SENHA_CLIENTE: senha,
  //         EMAIL_CLIENTE: email,
  //       });


  //       if (resposta != null) {
  //         navigation.navigate('PerfilCliente');
  //       }
  //     }

  //     catch (error) {
  //       console.error('Erro na consulta:', error);
  //       setLoading(false);
  //     }
  //   }
  // }

  const [fonteLoaded] = useFonts({
    Montserrat_500Medium,

  });

  if (!fonteLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
      <View style={styles.vieu}>
        <TituloCadastro textoh1={'Faça seu cadastro'} textoh2={'Insira as informações abaixo:'} />
        <View style={styles.botaoCM}>
          <TouchableOpacity style={[styles.clienteMotorista1, { backgroundColor: button1Color }]} onPress={() => botaoCliente()}>
            <Text style={[styles.texto, { color: button1letra }]}>Cliente</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.clienteMotorista, { backgroundColor: button2Color }]} onPress={()=>botaoMoto()}>
            <Text style={[styles.texto, { color: button2letra }]}>Motorista</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputes}>
          <MeuText nomePlaceholder={placeholder1} valorInput={nome} mudou={setNome} icon='person' />
          <MeuText nomePlaceholder='Endereço' valorInput={endereco} mudou={setEndereco} icon='map' />
          <MeuText nomePlaceholder='CPF' tipoInput='numeric' valorInput={cpf} mudou={setCpf} icon='document-text' />
          <MeuText nomePlaceholder={placeholderhr} icon={imghr} tipoInput={nomeOuHr} valorInput={nomeOuHorario} mudou={setnomeOuHorario} />
          <MeuText nomePlaceholder='Digite seu Email' icon='mail' tipoInput='email-address' valorInput={email} mudou={setEmail} />
          <MeuText nomePlaceholder='Digite sua senha' valorInput={senha} mudou={setSenha} icon='lock-closed' />
        </View>
        {
          /*>>>>>>>>>> Após fazer login, aparecera animação de carregamento <<<<<<<<<<<*/
          loading ? (

            <Touchable texto={<ActivityIndicator color="white" />} />
          )
            :
            (
              <Touchable texto={"Prosseguir"} evento={() => {
                if(email === '' || senha === '' || nome === '' || cpf === '' || endereco === '' || nomeOuHorario === ''){
                  console.log("Por favor, preencha todos os campos!")
                }
                else{
                  navigation.navigate("AdicionarFoto", {
                    email_cliente: email,
                    senha_cliente: senha,
                    nome_cliente: nome,
                    cpf_responsavel: cpf,
                    endereco_cliente: endereco,
                    responsavel_cliente: nomeOuHorario,
                  })
                }
            }} />

            )

        }
      </View>
    </ScrollView>
  );
}