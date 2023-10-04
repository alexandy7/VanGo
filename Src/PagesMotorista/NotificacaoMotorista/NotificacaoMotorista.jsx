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

            const user = await UserData()

            var token = await Token()
            const response = await ApiMotorista.get(`LerNotificacao?idMotorista=${user.id_motorista}`, {
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

                                const dataNotificacao = new Date(item.data_notificacao);
                                const diaAnterior = hoje.getDate() - 1;

                                // Verifica se o dia da notificação é o mesmo dia de hoje (Compara dia, mês e ano)
                                const mesmoDia = dataNotificacao.getDate() === hoje.getDate() &&
                                    dataNotificacao.getMonth() === hoje.getMonth() &&
                                    dataNotificacao.getFullYear() === hoje.getFullYear();

                                //Verifica se a notificação foi ontem 
                                const ontem = dataNotificacao.getDate() === diaAnterior &&
                                    dataNotificacao.getMonth() === hoje.getMonth() &&
                                    dataNotificacao.getFullYear() === hoje.getFullYear();

                                let horaOuData;

                                if (mesmoDia) {
                                    // Caso seja o mesmo dia, mostra somente as horas
                                    horaOuData = dataNotificacao.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
                                }
                                else if (ontem) {

                                    //Caso seja true, exibi "ontem" como data
                                    horaOuData = "Ontem"

                                }
                                else {
                                    // Caso seja diferente, mostra a data completa
                                    horaOuData = dataNotificacao.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
                                }


                                return (
                                    <Notificacao
                                        fotouser={require('../../../assets/UserPhoto.png')}
                                        nomeuser={item.nome_cliente}
                                        info={item.mensagem_notificacao}
                                        hora={horaOuData}
                                        key={item.id_notificacao} //Key serve para dar uma identificação unica ao elemento 
                                    />
                                )
                            }}
                        />

                    )
            }

        </SafeAreaView>
    )
}

