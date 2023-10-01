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

export default function PagamentosMotorista() {

    useEffect(() => {
        BuscarUsuario();
    }, [])
    
    const [user, setUser] = useState({});
    const [pagamentos, setPagamentos] = useState([]);
    
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

        try{

            const token = await Token();
            
            let response = await ApiMotorista.get(`ListarComprovantesPagamento?id_motorista=${1}`, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            })
            
            if(response.status !== 200){
                console.log("Desculpe, não háa nenhum comprovante.");
                return;
            }
            
            let json = response.data;
            setPagamentos(json);
        }

        catch(error){
            console.log(error)
        }
    }


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
                    <BarraDePesquisa placeholder={"Exemplo: Ana Clara"} />
                </View>
            </View>

            <View style={styles.alinhabotoes}>

                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textobotao}>Todos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textobotao}>Em Atraso</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textobotao}>Pagos</Text>
                </TouchableOpacity>

            </View>

            <FlatList
            keyExtractor={(item)=> item.id_pagamento}
            data={pagamentos}
            renderItem={({ item })=>{

                const Color = item.situacao_pagamento === "pago" ? "#00B383" : "#F71B0D";
                const icon = Color === "#00B383" ? "checkmark" : "warning"

                let dataFormatada = item.vencimento.substring(0, 10).replace(/-/g, "/");
                return(
                    <CardPagamento 
                    imagem={{uri: item.foto_cliente}} 
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