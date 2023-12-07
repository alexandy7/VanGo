import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Perfil";
import styles from "./VisualizarMotorista.modules";
import { Token, UserData } from "../../services/Contexts/Contexts";
import PerfilVisualizacao from "../../Componentes/PerfilVisualizacao";
import CaixaPerfil from "../../Componentes/CaixaPerfil";
import ApiCliente from "../../services/Api/ApiCiente";


const VisualizarMotorista = ({ route }) => {

    const { nome_motorista, foto_motorista, quantidadeclientes, endereco_motorista, periodo_motorista } = route.params;

    const navigation = useNavigation();

    // useEffect(()=>{
    //     BuscarMotorista();
    // });

    // async function BuscarMotorista(){

    //     let token = await Token();

    //     let response = await ApiCliente(`BuscarInfoMotorista/${id_motorista}`, {
    //         headers: {
    //             Authorization: "Bearer " + token,
    //             "Content-Type": "application/json",
    //         }
    //     });

    //     setMotorista(response.data);
    // }

    return (
        <ScrollView style={styles.geral}>

            <View>

                <PerfilVisualizacao
                    fotoUser={{uri: foto_motorista}}
                    nomeUser={nome_motorista}
                    evento={() => navigation.goBack()}
                />

                <View style={styles.regua}>
                    <CaixaPerfil
                        texto1={"5 Anos"}
                        titulotexto1={"Tempo"}
                        icontexto1={"hourglass-outline"}
                        texto2={quantidadeclientes}
                        titulotexto2={"Alunos"}
                        icontexto2={"person-outline"}
                        texto3={endereco_motorista}
                        titulotexto3={"Cidade"}
                        icontexto3={"business-outline"}
                        texto4={periodo_motorista}
                        titulotexto4={"Periodo"}
                        icontexto4={"time-outline"}
                        brushOrChat={"chatbubbles"}
                        evento={() => { navigation.navigate("ConversaChatCliente") }}
                    />
                </View>

            </View>
        </ScrollView>
    )
};

export default VisualizarMotorista;