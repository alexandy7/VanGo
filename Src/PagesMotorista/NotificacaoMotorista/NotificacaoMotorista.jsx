import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity, SafeAreaView} from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import Notificacao from "../../Componentes/Notificacao";
import ApiMotorista from "../../services/Api/ApiMotorista";
import styles from "./NotificacaoMotorista.modules";
import NetInfo, { refresh } from '@react-native-community/netinfo';
import { Token, UserData } from "../../services/Contexts/Contexts";
import { FlatList } from "react-native";
import axios from "axios";
import FormatadorData from "../../services/Formatadores/FormatadorData/FormatadorData";

export default function NotificacaoMotorista() {

    const [notificacoes, setNotificacoes] = useState([]);
    const [carregamento, setCarregamento] = useState(false);
    const [loadingRefresh, setLoadingRefresh] = useState(false)
    useEffect(() => {
        checkInternetConnection();
        setCarregamento(true);
        BuscarUsuario();
    }, [])

    async function BuscarUsuario() {
        try {

            const user = await UserData();

            let token = await Token();
            const response = await ApiMotorista.get(`LerNotificacao/${user.id_motorista}`, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            });

            let json = response.data;
            setNotificacoes(json);
            setCarregamento(false);
            setLoadingRefresh(false);
        }

        catch (error) {
            console.log('Houve um erro aqui', error)
        }
    }

    //Verifica se o usuário está conectado na internet
    const checkInternetConnection = async () => {
        const state = await NetInfo.fetch();

        if (state.isConnected) {
            console.log('O dispositivo está conectado à internet.');
        } else {
            console.log('O dispositivo não está conectado à internet.');
        }
    }

    const navigation = useNavigation();

    const hoje = new Date();

    return (
        <SafeAreaView style={styles.scroll}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.seta} onPress={() => { navigation.goBack() }}>
                    <Ionicons name="chevron-back-outline" size={30} />
                </TouchableOpacity>

                <Text style={styles.titulo}>Notificações</Text>


            </View>

            {
                // Aparece enquanto aguarda a resposta da API
                carregamento ? (
                    <View style={{ display: 'flex', alignSelf: 'center', marginBottom: 400, top: 200 }}>
                        <ActivityIndicator size="large" color="orange" style={{ alignItems: "center", justifyContent: "center" }} />
                    </View>
                )
                    :
                    (
                        <FlatList
                            keyExtractor={(Notificacoes) => Notificacoes.id_notificacao}
                            data={notificacoes}
                            refreshing={loadingRefresh}
                            onRefresh={() => {
                                setLoadingRefresh(true);
                                BuscarUsuario();
                            }}
                            renderItem={({ item }) => {

                                let nomeSeparado = item.nome_cliente.split(' ');
                                let Nome = nomeSeparado[0] + ' ' + nomeSeparado[1];

                                console.log(item.foto_cliente);
                                return (
                                    <Notificacao
                                        fotouser={{uri: item.foto_cliente}}
                                        nomeuser={Nome}
                                        info={item.mensagem_notificacao}
                                        hora={FormatadorData(item.data_notificacao)}
                                        key={item.id_notificacao} //Key serve para dar uma identificação unica ao elemento 

                                        clickImagem={()=> navigation.navigate("VisualizarCliente", {
                                            nome: item.nome_cliente,
                                            foto: item.foto_cliente,
                                            id: item.id_cliente
                                        })}
                                    />
                                )
                            }}
                        />

                    )
            }

        </SafeAreaView>
    )
}

