import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./SolicitacoesTurmaMotorista.modules";
import Solicitacao from "../../Componentes/Solicitacao";
import ApiMotorista from "../../services/Api/ApiMotorista";
import FormatadorData from "../../services/Formatadores/FormatadorData/FormatadorData";
import { Token, UserData } from "../../services/Contexts/Contexts";
import FormatadorTexto from "../../services/Formatadores/FormatadorTextos/FormatadorTextos";
export default function SolicitacoesTurmaMotorista() {

    const navigation = useNavigation();

    const [usuario, setUsuario] = useState({})
    const [solicitacoes, setSolicitacoes] = useState([]);
    const [carregamento, setCarregamento] = useState(false)


    useEffect(() => {
        BuscarUsuario();
        setCarregamento(true);
    }, [])

    async function BuscarUsuario() {
        try {

            const response = await UserData();
            setUsuario(response);

            const token = await Token();

            var response2 = await ApiMotorista.get(`ListarSolicitacoesTurma?id_motorista=${response.id_motorista}`, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            })

            var json = response2.data;
            setSolicitacoes(json);
            setCarregamento(false);
        }

        catch (error) {
            console.error('Ocorreu um erro inesperado: ', error)
        }

    }

    async function AceitarSolicitacao(id_turma, id_cliente, id_motorista, id_solicitacoesTurma) {


        RemoverItemDaLista(id_solicitacoesTurma);
        const token = await Token();

        const data = {
            Id_cliente: id_cliente,
            Turma_cliente: id_turma,
            Id_motorista: id_motorista
        }

        await ApiMotorista.put("InserirClienteTurma", data, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            }
        })

    }

    async function RecusarSolicitacao(id_cliente, id_solicitacoesTurma) {

        RemoverItemDaLista(id_solicitacoesTurma);
        const token = await Token();

        let response = await ApiMotorista.delete(`ExcluirSolicitacaoCliente?id_cliente=${id_cliente}`, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            }
        })

        if (!response.status) {
            Console.log("Desculpe, houve um erro interno");
        }
    }

    function RemoverItemDaLista(itemid) {
        console.log("ItemID a ser removido:", itemid);

        const updatedList = solicitacoes.filter(item => item.id_solicitacoesTurma !== itemid);
        setSolicitacoes(updatedList);
    }

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.seta} onPress={() => { navigation.goBack() }}>
                    <Ionicons name="chevron-back-outline" size={30} />
                </TouchableOpacity>

                <Text style={styles.titulo}>Solicitações</Text>
            </View>

            <View>
                {
                    carregamento ? (
                        <View style={{ display: 'flex', alignSelf: 'center', marginBottom: 400, top: 200 }}>
                            <Text style={{ fontSize: 17, marginBottom: 15 }} >Um momento, estamos buscando.</Text>
                            <ActivityIndicator size="large" color="orange" style={{ alignItems: "center", justifyContent: "center" }} />
                        </View>
                    )
                        :
                        (
                            solicitacoes.map((Solicitacoes) => {
                                let dataSolicitacao = Solicitacoes.data_solicitacao;
                                let dataFormatada = FormatadorData(dataSolicitacao);

                                return (
                                    <Solicitacao
                                        imagem={{ uri: Solicitacoes.foto_cliente }}
                                        nome={FormatadorTexto(Solicitacoes.nome_cliente, 14)}
                                        hora={dataFormatada}
                                        turma={Solicitacoes.nome_turma}
                                        key={Solicitacoes.id_solicitacoesTurma}

                                        onAceitar={() => AceitarSolicitacao(Solicitacoes.id_turma, Solicitacoes.id_cliente, Solicitacoes.id_motorista, Solicitacoes.id_solicitacoesTurma)}
                                        onRecusar={() => RecusarSolicitacao(Solicitacoes.id_cliente, Solicitacoes.id_solicitacoesTurma)}
                                    />
                                )
                            })
                        )
                }

            </View>

        </ScrollView>
    )
}