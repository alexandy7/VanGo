import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import MeuText from "../../Componentes/Common/MeuText";
import TituloCadastro from '../../Componentes/Common/Titulocadastros';
import Touchable from "../../Componentes/Common/Touchable";
import Api from "../../services/Api";

export default function Cadastro() {

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

    let MotoristaOuCliente = 'cliente';

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

        MotoristaOuCliente = 'cliente';


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

        MotoristaOuCliente = 'motorista';

    };
    //☝️ Lógica para caso estar no cadastro do motorista ou cliente mudar o placeholder e o tipo do input

    const navigation = useNavigation();

    const continuarCadastro = () => {

        if (quemE == 'cliente') {
            navigation.navigate('CadastroEscola');
        }

        if (quemE == 'motorista') {
            navigation.navigate('CadastroVeiculo');
        };
    };
    //☝️ está fazendo a lógica para qual pagina navegar

    async function Cadastrar() {
        if (MotoristaOuCliente == 'cliente') {

            try {
                navigation.navigate('CadastroEscola');
                const resposta = await Api.post('InserirCliente', {
                    NOME_CLIENTE: nome,
                    NOME_DEPENDENTE: nomeOuHorario,
                    CPF_CLIENTE: cpf,
                    ENDERECO_CLIENTE: endereco,
                    SENHA_CLIENTE: senha,
                    EMAIL_CLIENTE: email,
                });


                if (resposta != null) {
                    navigation.navigate('Login');
                } else {
                    console.log('Usuário não encontrado');
                }
            }

            catch (error) {
                console.error('Erro na consulta:', error);
            }
        }

        else {

            try {
                const resposta = await Api.post('InserirMotorista', {
                    NOME_MOTORISTA: nome,
                    ENDRECO_MOTORISTA: nomeOuHorario,
                    CPF_MOTORISTA: cpf,
                    ENDERECO_CLIENTE: endereco,
                    SENHA_CLIENTE: senha,
                    EMAIL_CLIENTE: email,
                });


                if (resposta != null) {
                    navigation.navigate('PerfilCliente');
                } else {
                    console.log('Usuário não encontrado');
                }
            }

            catch (error) {
                console.error('Erro na consulta:', error);
            }
        }
    }


    return (
        <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
          <View style={styles.vieu}>
            <TituloCadastro textoh1={'Faça seu cadastro'} textoh2={'Insira as informações abaixo:'} />
            <View style={styles.botaoCM}>
              <TouchableOpacity style={[styles.clienteMotorista1, { backgroundColor: button1Color }]} onPress={botaoCliente}>
                <Text style={[styles.texto, { color: button1letra }]}>Cliente</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.clienteMotorista, { backgroundColor: button2Color }]} onPress={botaoMoto}>
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
            <Touchable evento={Cadastrar} texto={'Prosseguir'} />
          </View>
        </ScrollView>
      );
      }
      
      const styles = StyleSheet.create({
        scroll: {
          flex: 1,
        },
        container: {
          flexGrow: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 20,
        },
        vieu: {
          justifyContent: 'space-evenly',
          alignItems: 'center',
        },
        botaoCM: {
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: 20,
        },
        clienteMotorista1: {
          width: 110,
          height: 50,
          borderRadius: 10,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        },
        clienteMotorista: {
          width: 110,
          height: 50,
          borderRadius: 10,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 50,
        },
        texto: {
          color: 'white',
          textAlign: 'center',
        },
      
      });
      