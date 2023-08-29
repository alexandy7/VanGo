import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./TelaSolicitacao.modules";
import Solicitacao from "../../Componentes/Solicitacao";
import ApiMotorista from "../../services/ApiMotorista";
import FormatadorData from "../../FormatadorData/FormatadorData";
export default function TelaSolicitacao() {
    
    const navigation = useNavigation();

    const [solicitacoes, setSolicitacoes] = useState([]);

    useEffect(() => {
        BuscarSolicitacoes();
    }, [])

    async function BuscarSolicitacoes() {
        var response = await ApiMotorista.get("ListarSolicitacoesTurma?id_motorista=2")

        var json = response.data;
        setSolicitacoes(json);

    }

    async function AceitarRecusarSolicitacao(id_turma, id_cliente, id_motorista){
        console.log(id_turma, id_cliente, id_motorista)
         await ApiMotorista.put("InserirClienteTurma", {
            
                Id_cliente: id_cliente,
                Turma_cliente: id_turma,
                Id_motorista: id_motorista
            
        })
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
                    solicitacoes.map((Solicitacoes) => {
                        let dataSolicitacao = Solicitacoes.data_solicitacao;
                        let dataFormatada = FormatadorData(dataSolicitacao);

                        return (

                            <Solicitacao
                            imagem={require("../../../assets/UserPhoto.png")}
                            nome={Solicitacoes.nome_cliente}
                            hora={dataFormatada}
                            turma={Solicitacoes.nome_turma}
                            key={Solicitacoes.id_solicitacoesTurma}
                            onAceitar={() => AceitarRecusarSolicitacao(Solicitacoes.id_turma, Solicitacoes.id_cliente, Solicitacoes.id_motorista)}
                            onRecusar={() => console.log("Botão Recusar foi clicado")} // Substitua pelo comportamento desejado
                        />
                        
                        )
                    })
                }
                <Solicitacao imagem={require("../../../assets/helpme.jpg")} nome={"Yago..."} hora={"00:00"} turma={"cama e não acordar"} />
            </View>

        </ScrollView>
    )
}