import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./AnexarPagamentos.modules";
import CardPagamento from "../../Componentes/CardPagamento";
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat"
import * as ImagePicker from 'expo-image-picker';
import { Image } from "react-native";
import { Token, UserData } from "../../services/Contexts/Contexts";
import axios from "axios";
import ApiCliente from "../../services/Api/ApiCiente";
import NetInfo from '@react-native-community/netinfo';
import SemWifi from "../../Componentes/SemWifi";
const AnexarPagamentos = ({ route }) => {

    const navigation = useNavigation();

    const { valor, icon, color, status, vencimento, idMensalidade } = route.params;

    const [base64, setBase64] = useState(null);
    const [foto, setFoto] = useState(null);
    const [exibirFoto, setExibirFoto] = useState(false);
    const [usuario, setUsuario] = useState({});
    const [conexao, setConexao] = useState(true)
    const hoje = new Date();


    useEffect(() => {
        ChecarConexao();
    }, [])

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular
    });

    if (!fonteLoaded) {
        return null;
    }

    async function ChecarConexao() {
        const state = await NetInfo.fetch();
        console.log(state.isConnected)
        if (state.isConnected) {
            BuscarUsuario();
        }
        else {
            setConexao(false)
        }
    }
    async function BuscarUsuario() {
        try {

            let user = await UserData();
            setUsuario(user);
            // console.log(user)
        }

        catch (error) {
            console.log(error)
        }
    }

    async function selecionarImagem() {
        try {

            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                base64: true
            });

            if (result.canceled) {
                return;
            }

            setBase64(result.assets[0].base64);
            setFoto(result.assets[0].uri);
            setExibirFoto(true);

        }
        catch (error) {
            console.log(error)
        }
    }

    async function EnviarPagamento() {

        try {

            let token = await Token();

            let data = {
                Id_mensalidade: idMensalidade,
                Comprovante_pagamento_Base64: base64
            }

            let response = await ApiCliente.post("EnviarPagamento", data, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            })

            if (response.status !== 200) {
                console.log("Houve um erro...");
                return;
            }

            navigation.navigate("PagamentoCliente");
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <ScrollView style={styles.principal}>
            <View style={styles.header}>
                <View style={styles.divesquerda}>
                    <TouchableOpacity style={styles.seta} onPress={() => { navigation.goBack() }}>
                        <Ionicons name="chevron-back-outline" size={30} />
                    </TouchableOpacity>
                </View>

                <View style={styles.divmeio}>
                    <Text style={styles.titulo}>Anexar Comprovante</Text>
                </View>

                <View style={styles.divdireita}>

                </View>
            </View>


            {
                conexao ? (
                    <View>
                        <CardPagamento
                            imagem={{ uri: usuario.foto_cliente }}
                            nome={usuario.nome_cliente}
                            valor={valor}
                            icon={icon}
                            status={status}
                            vencimento={vencimento}
                            color={color}
                            seta={true}
                        />


                        {
                            exibirFoto ? (
                                <TouchableOpacity onPress={() => { selecionarImagem() }} style={[styles.divanexo, { borderColor: "black", borderWidth: 0.5 }]}>
                                    <Image source={{ uri: foto }} style={styles.imagem} />
                                </TouchableOpacity>
                            )
                                :
                                (
                                    <TouchableOpacity style={styles.divanexo} onPress={() => { selecionarImagem() }}>
                                        <Text style={styles.textodestacado}>Clique aqui</Text>
                                        <Text style={styles.textoanexo}> para anexar o</Text>
                                        <Text style={styles.textoanexo}>pagamento. (PNG, JPG)</Text>
                                    </TouchableOpacity>
                                )
                        }

                        <TouchableOpacity style={styles.botaoanexar} onPress={() => { EnviarPagamento() }}>
                            <Text style={styles.textoanexar}>Enviar Anexo</Text>
                        </TouchableOpacity>
                    </View>
                )
                    :
                    (
                        <SemWifi></SemWifi>
                    )
            }
        </ScrollView>
    )
}

export default AnexarPagamentos;