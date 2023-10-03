import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
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

export default function PagamentosMotorista() {

    const navigation = useNavigation();
    useEffect(() => {
        BuscarUsuario();
    }, [])

    const [user, setUser] = useState({});
    const [pagamentos, setPagamentos] = useState([]);
    const [listaFiltrada, setListaFiltrada] = useState([]);
    const [searchPagamento, setSearchPagamento] = useState("")

    const [buttonTodos, setButtonTodos] = useState("#F7770D");
    const [buttonVencido, setButtonVencido] = useState("#e0e0e0");
    const [buttonPago, setButtonPago] = useState("#e0e0e0")

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium
    });

    if (!fonteLoaded) {
        return null;
    }

    async function BuscarUsuario() {
        let usuario = await UserData();

        setUser(usuario);

        BuscarPagamentos();
    }

    async function BuscarPagamentos() {

        try {

            const token = await Token();

            let response = await ApiMotorista.get(`ListarComprovantesPagamento?id_motorista=${1}`, {
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
            setPagamentos(json);
            setListaFiltrada(json);
        }

        catch (error) {
            console.log(error)
        }
    }

    function filtrarStatusPagamento(criterio) {

        const filtrando = pagamentos.filter((pagamentos) => pagamentos.situacao_pagamento === criterio);
        setListaFiltrada(filtrando);

        switch (criterio) {
            case "vencido":
                setButtonTodos("#e0e0e0");

                setButtonVencido("#F7770D");

                setButtonPago("#e0e0e0");
                break;

            case "pago":
                setButtonTodos("#e0e0e0");

                setButtonVencido("#e0e0e0");

                setButtonPago("#F7770D");
                break;
        }

    }

    function filtrarTodosPagamentos(){
        const todosPagamentos = pagamentos;
        setListaFiltrada(todosPagamentos);

        setButtonTodos("#F7770D");

        setButtonVencido("#e0e0e0");

        setButtonPago("#e0e0e0");
    }

    const lista = listaFiltrada.filter((pesquisa) => pesquisa.nome_cliente.toLowerCase().includes(searchPagamento.toLocaleLowerCase()))
    return (

        <View style={styles.main}>
            <View style={styles.header}>
                <View style={styles.divesquerda}>
                    <TouchableOpacity style={styles.seta} onPress={() => { navigation.goBack() }}>
                        <Ionicons name="chevron-back-outline" size={30} />
                    </TouchableOpacity>
                </View>

                <View style={styles.divmeio}>
                    <Text style={styles.titulo}>Pagamentos</Text>
                </View>

                <View style={styles.divdireita}>

                </View>

                <View style={styles.divbarra}>
                    <BarraDePesquisa 
                    placeholder={"Exemplo: Ana Clara"} 
                    valor={searchPagamento}
                    change={(text)=>{setSearchPagamento(text)}}
                    />
                </View>
            </View>

            <View style={styles.alinhabotoes}>

                <TouchableOpacity style={[styles.botao, {backgroundColor: buttonTodos }]} onPress={()=>{filtrarTodosPagamentos()}}>
                    <Text style={styles.textobotao}>Todos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.botao, {backgroundColor: buttonVencido}]} onPress={()=>{filtrarStatusPagamento("vencido")}}>
                    <Text style={styles.textobotao}>Vencido</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.botao, {backgroundColor: buttonPago}]} onPress={()=>{filtrarStatusPagamento("pago")}}>
                    <Text style={styles.textobotao}>Pagos</Text>
                </TouchableOpacity>

            </View>

            <FlatList
                keyExtractor={(item) => item.id_pagamento}
                data={lista}
                renderItem={({ item }) => {

                    const Color = item.situacao_pagamento === "pago" ? "#00B383" : "#F71B0D";
                    const icon = Color === "#00B383" ? "checkmark" : "warning"

                    let dataFormatada = item.vencimento.substring(0, 10).replace(/-/g, "/");
                    return (
                        <CardPagamento
                            imagem={{ uri: item.foto_cliente }}
                            nome={item.nome_cliente}
                            fatura={item.valor_pagamento}
                            color={Color}
                            vencimento={dataFormatada}
                            icon={icon}
                            iconcolor={Color}
                            status={item.situacao_pagamento}
                        />
                    )
                }}
            />
        </View>
    )
}