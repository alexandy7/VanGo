import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import Notificacao from "../../Componentes/Notificacao";
import ApiCliente from "../../services/Api/ApiCiente"
import styles from "./NotificacaoCliente.modules";
import NetInfo from '@react-native-community/netinfo';
import { AuthContext } from "../../services/Contexts/Contexts";

export default function NotificacaoCliente() {

    const { user } = useContext(AuthContext);

    const [notificacoes, setNotificacoes] = useState([]);
    const [carregamento, setCarregamento] = useState(false);

    useEffect(() => {
        checkInternetConnection();
        ListarNotificacoes();
        setCarregamento(true);
    }, [])

    //Verifica se o usuário está conectado na internet
    const checkInternetConnection = async () => {
        const state = await NetInfo.fetch();

        if (state.isConnected) {
            console.log('O dispositivo está conectado à internet.');
        } else {
            console.log('O dispositivo não está conectado à internet.');
        }
    }


    async function ListarNotificacoes() {
        try {
            const response = await ApiCliente.get(`ListarNotificacoes?id=${user.id_cliente}`);

            let json = response.data;
            setNotificacoes(json);
            setCarregamento(false);
        }

        catch (error) {
            console.log(error)
        }

    }
    const navigation = useNavigation();

    const irPerfil = () => {
        navigation.navigate('TabBarScreen')
    }


    const hoje = new Date(); // Pegando o dia de hoje 

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.seta} onPress={irPerfil}>
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

                        notificacoes.map((Notificacoes) => {

                            const dataNotificacao = new Date(Notificacoes.data_notificacao);
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
                                    nomeuser={'Motorista'}
                                    info={Notificacoes.mensagem_notificacao}
                                    hora={horaOuData}
                                    key={Notificacoes.id_notificacao} //Key serve para dar uma identificação unica ao elemento 
                                />
                            )
                        })
                    )
            }

        </ScrollView>
    )
}

