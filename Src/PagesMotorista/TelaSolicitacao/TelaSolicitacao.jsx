import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./TelaSolicitacao.modules";
import Solicitacao from "../../Componentes/Solicitacao";
import ApiMotorista from "../../services/ApiMotorista";
import FormatadorData from "../../FormatadorData/FormatadorData";
export default function TelaSolicitacao() {

    const [solicitacoes, setSolicitacoes] = useState([]);

    useEffect(() => {
        BuscarSolicitacoes();
    }, [])

    async function BuscarSolicitacoes() {
        var response = await ApiMotorista.get("ListarSolicitacoesTurma?id_motorista=2")

        var json = response.data;
        setSolicitacoes(json);

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

                <Text style={styles.titulo}>Solicitações</Text>
            </View>

            <View>
                {
                    solicitacoes.map((Solicitacoes) => {
                        let dataSolicitacao = Solicitacoes.data_solicitacao;
                        let dataFormatada = FormatadorData(dataSolicitacao);

                        return (

                            <Solicitacao imagem={require("../../../assets/helpme.jpg")}
                                nome={Solicitacoes.nome_cliente}
                                hora={dataFormatada}
                                turma={Solicitacoes.nome_turma}
                            ></Solicitacao>
                        )
                    })
                }
                <Solicitacao imagem={require("../../../assets/helpme.jpg")} nome={"Yago..."} hora={"00:00"} turma={"cama e não acordar"} />
            </View>

        </ScrollView>
    )
}