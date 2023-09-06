import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import InserirTurma from "../../Componentes/InserirTurma";
import ApiMotorista from "../../services/Api/ApiMotorista";
import { AuthContext } from "../../services/Contexts/Contexts";
import ApiCliente from "../../services/Api/ApiCiente";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import Touchable from "../../Componentes/Touchable";
import styles from "./SolicitarTurma.modules";

export default function SolicitarTurma() {

    const navigation = useNavigation();
    const [solicitacaoenviada, setSolicitacaoenviada] = useState(false);
    const [codigo, setCodigo] = useState('');
    const { user } = useContext(AuthContext);

    if (user.turma_cliente !== null) {
        navigation.navigate("TabBarCliente");
    }

    const data = {

        Nome_cliente: user.nome_cliente,
        Foto_cliente: user.foto_cliente,
        Id_cliente: user.id_cliente,
        Id_turma: Number(codigo)

    }

    async function EnviarSolicitacao() {

        try {

            let response = await ApiCliente.post('VerificarTurmaAndSolicitar', data, {
                headers: {
                    'Content-Type': 'application/json',
                },

            });

            if (response.status == 200) {

                setSolicitacaoenviada(true);
            }

        }

        catch (error) {

            console.error("Houve um erro aqui: ", error);
        }

    }

    return (

        <View style={styles.container}>
            <ScrollView style={styles.scroll}>

                {
                    solicitacaoenviada ? (

                        <View>

                            <View style={styles.SolicitacaoEnviada}>
                                <Image source={require('../../../assets/Ok.png')} style={styles.ok} />
                                <Text style={{ fontSize: 30 }}>Solicitação enviada!</Text>
                            </View>

                            <Image source={require('../../../assets/waiting.gif')} style={styles.gif} />


                            <View style={styles.MsgAguardando}>
                                <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>Aguardando a resposta do motorista...</Text>
                            </View>

                        </View>
                    )
                        :
                        (
                            <View>
                                <View style={styles.titulo}>
                                    <Image source={require('../../../assets/Logo.png')} style={styles.imagem} />
                                    <Text style={styles.textoTitulo}>Digite o código do motorista</Text>
                                </View>

                                <TextInput
                                    placeholder={'Exemplo: #33782'}
                                    style={styles.input}
                                    onChangeText={setCodigo}>
                                </TextInput>

                                <View style={styles.botao}>
                                    <Touchable texto={'Enviar'} evento={EnviarSolicitacao}></Touchable>
                                </View>
                            </View>
                        )
                }

            </ScrollView>
        </View>
    )
}

