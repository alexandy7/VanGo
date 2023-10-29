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
import FormatadorData from "../../services/Formatadores/FormatadorData/FormatadorData";
import SemWifi from "../../Componentes/SemWifi";

export default function NotificacaoCliente() {

    const [usuario, setUsuario] = useState({})
    const [notificacoes, setNotificacoes] = useState([]);
    const [carregamento, setCarregamento] = useState(false);
    const [encontrado, setEncontrado] = useState(undefined);
    const [loadingRefresh, setLoadingRefresh] = useState(false);
    const [internet, setInternet] = useState(true);

    useEffect(() => {
        checkInternetConnection();
        setCarregamento(true);
    }, [])

    async function checkInternetConnection() {
        const state = await NetInfo.fetch();

        if (!state.isConnected) {
            setInternet(false);
            return;
        }

        BuscarUsuario();
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
            {
                internet ? (

                    <View>
                        {
                            carregamento ? (
                                <View style={{ display: 'flex', alignSelf: 'center', marginBottom: 400, top: 200 }}>
                                    <ActivityIndicator size="large" color="orange" style={{ alignItems: "center", justifyContent: "center" }} />
                                </View>
                            ) : (
                                encontrado ? (
                                    <FlatList
                                        keyExtractor={(item) => item.id_notificacao}
                                        data={notificacoes}
                                        refresh={loadingRefresh}
                                        onRefreshing={() => {
                                            setLoadingRefresh(true);
                                            ListarNotificacoes();
                                        }}
                                        renderItem={({ item }) => {
                                            return (
                                                <Notificacao
                                                    fotouser={{ uri: item.foto_motorista }}
                                                    nomeuser={'Motorista'}
                                                    info={item.mensagem_notificacao}
                                                    hora={FormatadorData(item.data_notificacao)}
                                                />
                                            );
                                        }}
                                    />
                                ) : (
                                    <View style={styles.viewNotificacoes}>
                                        <NotFound />
                                    </View>
                                )
                            )
                        }
                    </View>
                )
                    :
                    (
                        <SemWifi />
                    )
            }
        </View>
    )
}

