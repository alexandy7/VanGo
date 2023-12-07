import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./PagamentosMotorista.modules";
import CardPagamento from "../../Componentes/CardPagamento";
import BarraDePesquisa from "../../Componentes/BarraDePesquisa";
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"
import { Token, UserData } from "../../services/Contexts/Contexts";
import ApiMotorista from "../../services/Api/ApiMotorista";
import axios from "axios";
import { FlatList } from "react-native";
import ApiCliente from "../../services/Api/ApiCiente";
import { useNavigation } from "@react-navigation/native";
import { SectionList } from "react-native";
import { refresh } from "@react-native-community/netinfo";
import NotFound from "../../Componentes/NotFound";
import FormatadorData from "../../services/Formatadores/FormatadorData/FormatadorData";

export default function PagamentosMotorista() {

    const navigation = useNavigation();
    useEffect(() => {
        BuscarUsuario();
    }, [])

    const [user, setUser] = useState({});
    const [mensalidade, setMensalidade] = useState([]);
    const [listaFiltrada, setListaFiltrada] = useState([]);
    const [searchMensalidade, setSearchMensalidade] = useState("")

    const [buttonPendente, setButtonPendente] = useState("#F7770D")
    const [buttonVencido, setButtonVencido] = useState("#e0e0e0");
    const [buttonPago, setButtonPago] = useState("#e0e0e0");

    const [loadingRefresh, setLoadingRefresh] = useState(false)
    const [encontrado, setEncontrado] = useState(false);
    const [vazio, setVazio] = useState(false);

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium
    });

    if (!fonteLoaded) {
        return null;
    }

    async function BuscarUsuario() {
        let usuario = await UserData();

        setUser(usuario);

        BuscarPagamentos(usuario.id_motorista);
    }

    async function BuscarPagamentos(id_motorista) {

        try {

            const token = await Token();

            let response = await ApiMotorista.get(`ListarMensalidades?id_motorista=${id_motorista}`, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            })

            if (response.status !== 200) {
                console.log("Desculpe, não háa nenhum comprovante.");
                return;
            }

            let json = response.data;
            setMensalidade(json);
            
            if (listaFiltrada[0]) {
                setListaFiltrada(json.filter((mensalidade) => mensalidade.situacao_mensalidade === listaFiltrada[0].situacao_mensalidade));
                setLoadingRefresh(false);
                setEncontrado(true);
                return;
            }

            setListaFiltrada(json.filter((mensalidade) => mensalidade.situacao_mensalidade === "pendente"));
            setLoadingRefresh(false);
            setEncontrado(true);
        }

        catch (error) {
            console.log(error);
            setVazio(true);
        }
    }

    function filtrarStatusMensalidade(criterio) {

        const filtrando = mensalidade.filter((mensalidades) => mensalidades.situacao_mensalidade === criterio);
        setListaFiltrada(filtrando);

        switch (criterio) {
            case "pago":
                setButtonPendente("#e0e0e0");

                setButtonPago("#F7770D");

                setButtonVencido("#e0e0e0");
                break;

            case "vencido":
                setButtonPendente("#e0e0e0");

                setButtonVencido("#F7770D");

                setButtonPago("#e0e0e0");
                break;

            case "pendente":
                setButtonPendente("#F7770D");

                setButtonPago("#e0e0e0");

                setButtonVencido("#e0e0e0");
                break;
        }
    }

    const lista = listaFiltrada.filter((pesquisa) => pesquisa.nome_cliente.toLowerCase().includes(searchMensalidade.toLocaleLowerCase()))

    // Organizar os pagamentos em grupos por meses
    const pagamentosPorMes = {};


    lista.forEach(item => {
        const data = new Date(item.vencimento_mensalidade);
        //Pegando o mês e ano. Estou formatando para a primeira letra do mês ficar maiuscula
        const mesAno = `${data.toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase() + data.toLocaleString('default', { month: 'long' }).slice(1)} ${data.getFullYear()}`;

        if (!pagamentosPorMes[mesAno]) {
            //Cria um array vazio para o `mesAno`
            pagamentosPorMes[mesAno] = [];
        }
        //Adiciona o valor de `item` ao array 
        pagamentosPorMes[mesAno].push(item);
    });

    //Converte o `pagamentosPorMes` em matriz de pares e cria grupos  
    const groupedData = Object.entries(pagamentosPorMes).map(([month, data]) => ({
        title: month,
        data: data,
    }));

    return (

        <View style={styles.main}>
            <View style={styles.header}>


                <View style={styles.divmeio}>
                    <Text style={styles.titulo}>Mensalidades</Text>
                </View>


                <View style={styles.divbarra}>
                    <BarraDePesquisa
                        placeholder={"Exemplo: Ana Clara"}
                        valor={searchMensalidade}
                        change={(text) => { setSearchMensalidade(text) }}
                    />
                </View>
            </View>

            <View style={styles.alinhabotoes}>

                <TouchableOpacity style={[styles.botao, { backgroundColor: buttonPendente }]} onPress={() => { filtrarStatusMensalidade("pendente") }}>
                    <Text style={styles.textobotao}>Pendente</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.botao, { backgroundColor: buttonPago }]} onPress={() => { filtrarStatusMensalidade("pago") }}>
                    <Text style={styles.textobotao}>Pago</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.botao, { backgroundColor: buttonVencido }]} onPress={() => { filtrarStatusMensalidade("vencido") }}>
                    <Text style={styles.textobotao}>Vencido</Text>
                </TouchableOpacity>

            </View>

            {
                encontrado ? (

                    <SectionList
                        keyExtractor={(item) => item.id_pagamento}
                        refreshing={loadingRefresh}
                        onRefresh={() => {
                            setLoadingRefresh(true);
                            BuscarPagamentos(user.id_motorista);
                        }}

                        renderItem={({ item }) => {

                            let nomeSeparado = item.nome_cliente.split(' ');
                            let Nome = nomeSeparado[0] + ' ' + nomeSeparado[1];

                            let Color;
                            let Icon;

                            switch (item.situacao_mensalidade) {
                                case "pago":
                                    Color = "green";
                                    Icon = "checkmark";
                                    break;

                                case "pendente":
                                    Color = "#FF8C00";
                                    Icon = "time-outline";
                                    break;

                                case "vencido":
                                    Color = "red";
                                    Icon = "warning";
                                    break;
                            };

                            return (
                                <CardPagamento
                                    imagem={{ uri: item.foto_cliente }}
                                    clickImagem={() => navigation.navigate("VisualizarCliente", {
                                        nome: item.nome_cliente,
                                        foto: item.foto_cliente,
                                        id: item.id_cliente
                                    })}
                                    nome={Nome}
                                    valor={item.valor_mensalidade}
                                    cor={Color}
                                    vencimento={FormatadorData(item.vencimento_mensalidade)}
                                    icon={Icon}
                                    status={item.situacao_mensalidade}
                                    seta={item.situacao_mensalidade !== "vencido" ? true : false}

                                    evento={() => {
                                        navigation.replace("AceitarPagamento", {
                                            imagem: item.foto_cliente,
                                            nome: item.nome_cliente,
                                            valor: item.valor_mensalidade,
                                            color: Color,
                                            vencimento: item.vencimento_mensalidade,
                                            icon: Icon,
                                            status: item.situacao_mensalidade,
                                            comprovante: item.comprovante_pagamento,
                                            id_cliente: item.id_cliente,
                                            id_mensalidade: item.id_mensalidade,
                                            id_motorista: user.id_motorista,
                                            dataDecorrente: mensalidade.Data_decorrente_mensalidade
                                        })
                                    }}
                                />
                            )
                        }}

                        ListFooterComponent={() => (
                            // Footer criado para o TabBar não sobrepor as mensalidades
                            <View style={{ backgroundColor: "white", height: 90 }}>
                                <Text></Text>
                            </View>
                        )}

                        sections={groupedData}
                        renderSectionHeader={({ section: { title } }) => (
                            <View style={styles.headerContainer}>
                                <Text style={{ marginLeft: "5%", marginBottom: "1%", fontWeight: "bold" }}>{title}</Text>
                            </View>
                        )}
                    />
                )
                    :
                    (
                        vazio ? (
                            <View style={{ JustifyContent: "center" }}>
                                <NotFound />
                            </View>
                        )
                            :
                            (
                                <ActivityIndicator color={"#F7770D"} size={35} style={{ marginTop: "50%" }} />
                            )
                    )
            }

            {/* <FlatList
                keyExtractor={(item) => item.id_mensalidade}
                data={lista}
                refreshing={loadingRefresh}
                onRefresh={() => {
                    setLoadingRefresh(true);
                    BuscarPagamentos();
                }}
                renderItem={({ item }) => {

                    const Color = item.situacao_mensalidade === "pago" ? "#00B383" : "#F71B0D";
                    const Seta = item.situacao_mensalidade === "pago" ? true : false;

                    const icon = Color === "#00B383" ? "checkmark" : "warning"

                    let dataFormatada = item.vencimento_mensalidade.substring(0, 10).replace(/-/g, "/");
                    return (
                        <CardPagamento
                            imagem={{ uri: item.foto_cliente }}
                            nome={item.nome_cliente}
                            valor={item.valor_mensalidade}
                            color={Color}
                            vencimento={dataFormatada}
                            icon={icon}
                            status={item.situacao_mensalidade}
                            seta={Seta}

                            evento={()=> {navigation.navigate("AceitarPagamento", {
                                imagem: item.foto_cliente,
                                nome: item.nome_cliente,
                                valor: item.valor_mensalidade,
                                color: Color,
                                vencimento: dataFormatada,
                                icon: icon,
                                status: item.situacao_mensalidade,
                                comprovante: item.comprovante_pagamento,
                                id_cliente : item.id_cliente,
                                id_mensalidade: item.id_mensalidade
                            })}}
                        />
                    )
                }}
            /> */}
        </View>
    )
}