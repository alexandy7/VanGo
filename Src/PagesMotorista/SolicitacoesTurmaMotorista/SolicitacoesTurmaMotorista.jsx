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
import { FlatList } from "react-native";
import NaoEncontrado from "../../Componentes/NaoEncontrado";
import axios from "axios";
export default function SolicitacoesTurmaMotorista() {

    const navigation = useNavigation();

    const [usuario, setUsuario] = useState({})
    const [solicitacoes, setSolicitacoes] = useState([]);
    const [carregamento, setCarregamento] = useState(false)
    const [encontrado, setEncontrado] = useState(true)

    useEffect(() => {
        BuscarUsuario();
        setCarregamento(true);
    }, [])

    async function BuscarUsuario() {
        try {

            const user = await UserData();
            setUsuario(user);
            BuscarSolicitacoes();
        }

        catch (error) {
            console.log('Ocorreu um erro inesperado: ', error);
        }

    };

    async function BuscarSolicitacoes(){

        try{

            const token = await Token();
            
            
            var response = await ApiMotorista.get(`ListarSolicitacoesTurma?id_motorista=${1}`, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            })
            
            var json = response.data;
            setSolicitacoes(json);
            setCarregamento(false);
        }

        catch(error){
            console.log(error);
            setCarregamento(false);
            setEncontrado(false);
        }
    };

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
        };
    };

    function RemoverItemDaLista(itemid) {
        const updatedList = solicitacoes.filter(item => item.id_solicitacoesTurma !== itemid);
        setSolicitacoes(updatedList);
    };

    return (
        <View style={styles.container}>

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
                            <Text style={{ fontSize: 17, marginBottom: 15 }} >Um momento, estamos buscando...</Text>
                            <ActivityIndicator size="large" color="orange" style={{ alignItems: "center", justifyContent: "center" }} />
                        </View>
                    )
                        :
                        (
                           
                           encontrado ? (

                               <FlatList
                               keyExtractor={(item) => item.id_solicitacoesTurma}
                               data={solicitacoes}

                               renderItem={({ item }) => {

                                    let dataSolicitacao = item.data_solicitacao;
                                    let dataFormatada = FormatadorData(dataSolicitacao);

                                    return (
                                        <Solicitacao
                                            imagem={{ uri: item.foto_cliente }}
                                            nome={FormatadorTexto(item.nome_cliente, 14)}
                                            hora={dataFormatada}
                                            turma={item.nome_turma}
                                            key={item.id_solicitacoesTurma}
                                            
                                            onAceitar={() => AceitarSolicitacao(item.id_turma, item.id_cliente, item.id_motorista, item.id_solicitacoesTurma)}
                                            onRecusar={() => RecusarSolicitacao(item.id_cliente, item.id_solicitacoesTurma)}
                                        />
                                        )
                                    }}
                                    />
                                    )
                                    :
                                    (
                                        <NaoEncontrado mensagem={"Não ha nenhuma solicitação"}></NaoEncontrado>
                                    )
                        )
                }

            </View>

        </View>
    )
}