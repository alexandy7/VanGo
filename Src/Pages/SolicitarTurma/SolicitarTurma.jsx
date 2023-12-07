import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { UserData, Token, RemoverToken } from "../../services/Contexts/Contexts";
import ApiCliente from "../../services/Api/ApiCiente";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import Touchable from "../../Componentes/Touchable";
import styles from "./SolicitarTurma.modules";
import axios from "axios";
import MeuText from "../../Componentes/MeuText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TituloCadastro from "../../Componentes/Titulocadastros";
import showToast from "../../services/Toast/Toast";
export default function SolicitarTurma() {

    const navigation = useNavigation();
    const [solicitacaoenviada, setSolicitacaoenviada] = useState(false);
    const [codigo, setCodigo] = useState('');
    const [user, setUser] = useState({})

    useEffect(() => {
        async function DadosUsuario() {
            try {

                let usuario = await UserData();
                setUser(usuario);
                console.log(usuario);

                const visitouTela = await AsyncStorage.getItem('TelaVisitada');
                if (visitouTela) {
                    setSolicitacaoenviada(true);
                };

                // AtivarTimer(usuario.id_cliente)
            }
            catch (error) {
                console.log(error);
            };
        };
        DadosUsuario();

    }, []);


    async function EnviarSolicitacao() {

        let dataSolicitacao = new Date();

        try {
            const data = {
                Nome_cliente: user.nome_cliente,
                Foto_cliente: user.foto_cliente,
                Data_solicitacao: dataSolicitacao,
                Id_cliente: user.id_cliente,
                Id_turma: Number(codigo)
            };

            const token = await Token()

            let response = await ApiCliente.post('VerificarTurmaAndSolicitar', data, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            });

            if (response.status == 200) {
                setSolicitacaoenviada(true);
                await AsyncStorage.setItem('TelaVisitada', 'true');
            }

        }

        catch (error) {
            console.log("Houve um erro aqui: ", error);
            showToast('error', 'Inválido', 'Esse código não existe.', 4000)
        }
    }

    // function AtivarTimer(id_cliente) {
    //     const intervalId = setInterval(() => {
    //         let response = VerificarSolicitacao(id_cliente);
    //         if (response) {
    //             return clearInterval(intervalId);
    //         }
    //     }, 20000);
    // }

    async function VerificarSolicitacao(usuario) {
        console.log("funciounou aqui")
        try {
            let token = await Token();
            let response = await ApiCliente.get(`VerificarSolicitacao/${usuario}`, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            });

            if (response.status === 200) {
                RemoverToken();
                navigation.goBack();
                return true;
            };
        }
        catch (error) {
            console.log(error);
        }
    }
    return (

        <View style={styles.container}>
            <ScrollView style={styles.scroll}>

                {
                    solicitacaoenviada ? (

                        <View>

                            <View style={{ marginTop: "10%" }}>
                                <TituloCadastro
                                    textoh1={'Solicitação enviada!'}
                                />
                            </View>

                            <View style={styles.viewGif} >
                                <Image source={require('../../../assets/SolicitacaoEnviada.gif')} style={styles.gif} />
                            </View>


                            <TouchableOpacity activeOpacity={1} onPress={()=>{VerificarSolicitacao(user.id_cliente)}} style={styles.MsgAguardando}>
                                <Text style={{ color: "white", textAlign: 'center', fontSize: 20 }}>Aguardando a resposta do motorista...</Text>
                            </TouchableOpacity>

                        </View>
                    )
                        :
                        (
                            <View>
                                <View style={styles.titulo}>
                                    <Image source={require('../../../assets/Logo.png')} style={styles.imagem} />
                                    <Text style={styles.textoTitulo}>Digite o código do motorista</Text>
                                </View>

                                <MeuText
                                    nomePlaceholder={'Exemplo: #33782'}
                                    icon={'key'}
                                    mudou={(text) => { setCodigo(text) }}
                                    keyboardType="numeric"
                                />

                                <View style={styles.botao}>
                                    <Touchable texto={'Enviar'} evento={() => EnviarSolicitacao()} />
                                </View>
                            </View>
                        )
                }

            </ScrollView>
        </View>
    )
}

