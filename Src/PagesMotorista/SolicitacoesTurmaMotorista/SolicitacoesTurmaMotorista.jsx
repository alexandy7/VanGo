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

    const [usuario, setUsuario] = useState({});
    const [solicitacoes, setSolicitacoes] = useState([]);
    const [carregamento, setCarregamento] = useState(false);
    const [loading, setLoading] = useState(false);
    const [encontrado, setEncontrado] = useState(true);

    const [solicitacoesAceitas, setSolicitacoesAceitas] = useState([]);

    const [cancelar, setCancelar] = useState([]);

    useEffect(() => {
        BuscarUsuario();
        setCarregamento(true);
    }, [])

    async function BuscarUsuario() {
        try {

            const user = await UserData();
            setUsuario(user);
            BuscarSolicitacoes(user.id_motorista);
        }

        catch (error) {
            console.log('Ocorreu um erro inesperado: ', error);
        }

    };

    async function BuscarSolicitacoes(id) {

        try {

            const token = await Token();


            var response = await ApiMotorista.get(`ListarSolicitacoesTurma?id_motorista=${id}`, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            })

            var json = response.data;
            setSolicitacoes(json);
            setCarregamento(false);
        }

        catch (error) {
            console.log(error);
            setCarregamento(false);
            setEncontrado(false);
        }
    };


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
        const novoCancelar = { ...cancelar };
        delete novoCancelar[itemid];

        const novaLista = { ...solicitacoesAceitas };
        delete novaLista[itemid];

        setSolicitacoesAceitas(novaLista);
        setCancelar(novoCancelar);
        console.log(novaLista)
    };

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity style={styles.seta} onPress={() => { navigation.goBack() }}>
                    <Ionicons name="chevron-back-outline" size={30} />
                </TouchableOpacity>

                <Text style={styles.titulo}>Solicitações</Text>
            </View>

            {
                solicitacoesAceitas.length > 0 && (

                    <View style={{ alignSelf: 'flex-end', bottom: 20, right: 25 }}>
                        <TouchableOpacity 
                        style={{ backgroundColor: 'green', width: 110, height: 30, justifyContent: 'center', borderRadius: 10 }}
                        onPress={()=>{
                            navigation.navigate('CadastrarClienteTurma', {
                            Clientes: solicitacoesAceitas
                        })}}
                        >
                            <Text style={{ color: 'white', textAlign: 'center' }}>Próxima ➔</Text>
                        </TouchableOpacity>
                        {/* Círculo para representar o número de notificações */}
                        {solicitacoesAceitas.length > 0 && (
                            <View style={styles.circleContainer}>
                                <Text style={styles.circleText}>{solicitacoesAceitas.length}</Text>
                            </View>
                        )}
                    </View>
                )
            }
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
                                    refresh={loading}
                                    onRefreshing={()=> {
                                        setLoading(true);
                                        BuscarSolicitacoes(usuario.id_motorista);
                                    }
                                    }
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
                                                cancelar={cancelar[item.id_solicitacoesTurma]}

                                                onAceitar={() => {
                                                    let tamanho = Object.values(cancelar)
                                                    if (tamanho.length > 0) {
                                                        setCancelar(pervState => ({
                                                            ...pervState, [item.id_solicitacoesTurma]: true
                                                        }))
                                                    }
                                                    else {
                                                        setCancelar(({ [item.id_solicitacoesTurma]: true }))
                                                    }


                                                    const objeto = {
                                                        idTurma: item.id_turma,
                                                        idCliente: item.id_cliente,
                                                        nomeCliente: item.nome_cliente,
                                                        fotoCliente: item.foto_cliente,
                                                        idMotorista: item.id_motorista,
                                                        idSolicitacao: item.id_solicitacoesTurma
                                                    };

                                                    let tamanho2 = Object.values(solicitacoesAceitas);
                                                    if (tamanho2.length > 0) {
                                                        setSolicitacoesAceitas([...solicitacoesAceitas, objeto])
                                                    }
                                                    else {
                                                        setSolicitacoesAceitas([objeto])
                                                    }
                                                }}

                                                onRecusar={() => RecusarSolicitacao(item.id_cliente, item.id_solicitacoesTurma)}
                                                onCancelar={() => {
                                                    RemoverItemDaLista(item.id_solicitacoesTurma)
                                                }}
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