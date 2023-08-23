import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import Notificacao from "../../Componentes/Common/Notificacao";
import Api from "../../services/Api";

export default function NotificaMoto() {

    const [notificacoes, setNotificacoes] = useState([]);

    // useEffect(() => {
    //     ListarNotificacoes();
    // }, [])

    // async function ListarNotificacoes() {
    //     try {
    //         const response = await Api.get("https://localhost:7149/api/Motorista/LerNotificacao?id=5");

          
    //         let json = response.data;
    //         setNotificacoes(json)
    //     }
        
    //     catch (error) {
    //         alert( error)
    //     }

    // }
    const navigation = useNavigation();

    const irPerfil = () => {
        navigation.navigate('TabBarScreen')
    }

    const hoje = new Date(); // Pegando o dia de hoje 

    return (
        <ScrollView>
            <View style={styles.header}>
                <TouchableOpacity style={styles.seta} onPress={irPerfil}>
                    <Ionicons name="chevron-back-outline" size={30} />
                </TouchableOpacity>

                <Text style={styles.titulo}>Notificações</Text>

                <Notificacao
                            fotouser={require('../../../assets/UserPhoto.png')}
                            nomeuser={"Karen"}
                            info={"Enviou um comprovante"}
                            hora={"29/04/2023"}
                        />
            </View>
            
            {
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
                            nomeuser={Notificacoes.nome_cliente}
                            info={Notificacoes.tipo_notificacao}
                            hora={horaOuData}
                        />
                    );
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#EFEFEF',
    },

    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
        marginBottom: 50
    },

    seta: {
      
    },

    titulo: {
        fontSize: 26,
        position: "relative",
        alignSelf: "center",
        top: "5%"
    },

});