import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./TelaSolicitacao.modules";
import Solicitacao from "../../Componentes/Solicitacao";
import ApiMotorista from "../../services/ApiMotorista";
import FormatadorData from "../../FormatadorData/FormatadorData";
export default function TelaSolicitacao() {

    const navigation = useNavigation();

    const [solicitacoes, setSolicitacoes] = useState([]);
    const [carregamento, setCarregamento] = useState(false)
    useEffect(() => {
        BuscarSolicitacoes();
        setCarregamento(true);
    }, [])

    async function BuscarSolicitacoes() {
        var response = await ApiMotorista.get("ListarSolicitacoesTurma?id_motorista=2")

        var json = response.data;
        setSolicitacoes(json);
        setCarregamento(false);

    }

    async function AceitarSolicitacao(id_turma, id_cliente, id_motorista) {

        await ApiMotorista.put("InserirClienteTurma", {

            Id_cliente: id_cliente,
            Turma_cliente: id_turma,
            Id_motorista: id_motorista

        })

        BuscarSolicitacoes();
    }

    async function RecusarSolicitacao(id_cliente){

        let response = await ApiMotorista.delete(`ExcluirSolicitacaoCliente?id_cliente=${id_cliente}`) 

        if(!response.status){
            Console.log("Desculpe, houve um erro interno");
        }

        BuscarSolicitacoes();

    }


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
                                        imagem={Solicitacoes.foto_cliente}
                                        nome={Solicitacoes.nome_cliente}
                                        hora={dataFormatada}
                                        turma={Solicitacoes.nome_turma}
                                        key={Solicitacoes.id_solicitacoesTurma}
                                        
                                        onAceitar={() => AceitarSolicitacao(Solicitacoes.id_turma, Solicitacoes.id_cliente, Solicitacoes.id_motorista)}
                                        onRecusar={() => RecusarSolicitacao(Solicitacoes.id_cliente)}
                                    />

                                )
                            })
                        )
                }
               
            </View>

        </ScrollView>
    )
}