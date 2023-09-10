import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./SolicitacoesTurmaMotorista.modules";
import Solicitacao from "../../Componentes/Solicitacao";
import ApiMotorista from "../../services/Api/ApiMotorista";
import FormatadorData from "../../services/Formatadores/FormatadorData/FormatadorData";
import { UserData } from "../../services/Contexts/Contexts";
import FormatadorTexto from "../../services/Formatadores/FormatadorTextos/FormatadorTextos";
export default function SolicitacoesTurmaMotorista() {

    const navigation = useNavigation();

    const [solicitacoes, setSolicitacoes] = useState([]);
    const [carregamento, setCarregamento] = useState(false)
    const { user } = useContext(AuthContext);

    useEffect(() => {
        BuscarSolicitacoes();
        setCarregamento(true);
    }, [])

    async function BuscarSolicitacoes() {
        var response = await ApiMotorista.get(`ListarSolicitacoesTurma?id_motorista=${user.id_motorista}`)

        var json = response.data;
        setSolicitacoes(json);
        setCarregamento(false);

    }

    async function AceitarSolicitacao(id_turma, id_cliente, id_motorista, id_solicitacoesTurma) {

       
        RemoverItemDaLista(id_solicitacoesTurma);

        await ApiMotorista.put("InserirClienteTurma", {

            Id_cliente: id_cliente,
            Turma_cliente: id_turma,
            Id_motorista: id_motorista

        })

    }

    async function RecusarSolicitacao(id_cliente, id_solicitacoesTurma) {
        
        RemoverItemDaLista(id_solicitacoesTurma);
        
        let response = await ApiMotorista.delete(`ExcluirSolicitacaoCliente?id_cliente=${id_cliente}`)
        
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
                <TouchableOpacity style={styles.seta} onPress={() => {navigation.navigate('TabBarScreen')}}>
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