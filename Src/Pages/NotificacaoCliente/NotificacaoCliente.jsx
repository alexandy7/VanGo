import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, RefreshControl, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import Notificacao from "../../Componentes/Notificacao";
import ApiCliente from "../../services/Api/ApiCiente"
import styles from "./NotificacaoCliente.modules";
import NetInfo from '@react-native-community/netinfo';
import { Token, UserData } from "../../services/Contexts/Contexts";
import NotFound from "../../Componentes/NotFound";
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"

export default function NotificacaoCliente() {

    const [usuario, setUsuario] = useState({})
    const [notificacoes, setNotificacoes] = useState([]);
    const [carregamento, setCarregamento] = useState(false);
    const [encontrado, setEncontrado] = useState(undefined);
    const [loadingRefresh, setLoadingRefresh] = useState(false);

    useEffect(() => {
        checkInternetConnection();
        setCarregamento(true);
    }, [])

    //Verifica se o usuário está conectado na internet
    async function checkInternetConnection() {
        const state = await NetInfo.fetch();

        if (state.isConnected) {
            console.log('O dispositivo está conectado à internet.');
            BuscarUsuario()
        } else {
            console.log('O dispositivo não está conectado à internet.');
        }
    }

    async function BuscarUsuario() {

        let user = await UserData()
        setUsuario(user)
        ListarNotificacoes(user.id_cliente)
    }


    async function ListarNotificacoes(id_cliente) {
        try {

            const token = await Token()

            const response = await ApiCliente.get(`ListarNotificacoes?id=${id_cliente}`, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            });

            let json = response.data;
            setNotificacoes(json);
            setCarregamento(false);
            setEncontrado(true);
            setLoadingRefresh(false);
        }

        catch (error) {
            setCarregamento(false);
            setEncontrado(false)
            console.log(error)
        }

    }
    const navigation = useNavigation();

    const hoje = new Date(); // Pegando o dia de hoje 

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
    });

    if (!fonteLoaded) {
        return null;
    }

    return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.divesquerda}>
                        <TouchableOpacity style={styles.seta} onPress={() => { navigation.goBack() }}>
                            <Ionicons name="chevron-back-outline" size={30} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.divmeio}>
                        <Text style={styles.titulo}>Notificações</Text>
                    </View>
                    <View style={styles.divdireita}>
                    </View>
                </View>
                <View style={styles.viewNotificacoes}>
                    {
                        carregamento ? (
                            <View style={{ display: 'flex', alignSelf: 'center', marginBottom: 400, top: 200 }}>
                                <ActivityIndicator size="large" color="orange" style={{ alignItems: "center", justifyContent: "center" }} />
                            </View>
                        ) : (
                            notificacoes.length > 0 ? (
                                <FlatList
                                    keyExtractor={(item) => item.id_notificacao}
                                    data={notificacoes}
                                    refresh={loadingRefresh}
                                    onRefreshing={()=> {
                                        setLoadingRefresh(true);
                                        ListarNotificacoes();
                                    }}
                                    renderItem={({ item }) => {
                                        const dataNotificacao = new Date(item.data_notificacao);
                                        const diaAnterior = hoje.getDate() - 1;
                                        // Verifica se o dia da notificação é o mesmo dia de hoje (Compara dia, mês e ano)
                                        const mesmoDia = dataNotificacao.getDate() === hoje.getDate() &&
                                            dataNotificacao.getMonth() === hoje.getMonth() &&
                                            dataNotificacao.getFullYear() === hoje.getFullYear();
                                        // Verifica se a notificação foi ontem
                                        const ontem = dataNotificacao.getDate() === diaAnterior &&
                                            dataNotificacao.getMonth() === hoje.getMonth() &&
                                            dataNotificacao.getFullYear() === hoje.getFullYear();
                                        let horaOuData;
                                        if (mesmoDia) {
                                            // Caso seja o mesmo dia, mostra somente as horas
                                            horaOuData = dataNotificacao.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
                                        } else if (ontem) {
                                            // Caso seja true, exibi "ontem" como data
                                            horaOuData = "Ontem"
                                        } else {
                                            // Caso seja diferente, mostra a data completa
                                            horaOuData = dataNotificacao.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
                                        }
                                        return (
                                            <Notificacao
                                                fotouser={{uri: item.foto_motorista}}
                                                nomeuser={'Motorista'}
                                                info={item.mensagem_notificacao}
                                                hora={horaOuData}
                                            />
                                        );
                                    }}
                                />
                                // notificacoes.map((Notificacoes) => {
                                //     const dataNotificacao = new Date(Notificacoes.data_notificacao);
                                //     const diaAnterior = hoje.getDate() - 1;
                                //     // Verifica se o dia da notificação é o mesmo dia de hoje (Compara dia, mês e ano)
                                //     const mesmoDia = dataNotificacao.getDate() === hoje.getDate() &&
                                //         dataNotificacao.getMonth() === hoje.getMonth() &&
                                //         dataNotificacao.getFullYear() === hoje.getFullYear();
                                //     // Verifica se a notificação foi ontem
                                //     const ontem = dataNotificacao.getDate() === diaAnterior &&
                                //         dataNotificacao.getMonth() === hoje.getMonth() &&
                                //         dataNotificacao.getFullYear() === hoje.getFullYear();
                                //     let horaOuData;
                                //     if (mesmoDia) {
                                //         // Caso seja o mesmo dia, mostra somente as horas
                                //         horaOuData = dataNotificacao.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
                                //     } else if (ontem) {
                                //         // Caso seja true, exibi "ontem" como data
                                //         horaOuData = "Ontem"
                                //     } else {
                                //         // Caso seja diferente, mostra a data completa
                                //         horaOuData = dataNotificacao.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
                                //     }
                                //     return (
                                //         <Notificacao
                                //             fotouser={require('../../../assets/UserPhoto.png')}
                                //             nomeuser={'Motorista'}
                                //             info={Notificacoes.mensagem_notificacao}
                                //             hora={horaOuData}
                                //             key={Notificacoes.id_notificacao} // Key serve para dar uma identificação única ao elemento
                                //         />
                                //     );
                                // })
                            ) : (
                                <NotFound />
                            )
                        )
                    }
                </View>
            </View>
    )
}

