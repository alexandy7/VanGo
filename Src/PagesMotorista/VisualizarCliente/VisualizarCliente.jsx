import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Perfil";
import { UserData } from "../../services/Contexts/Contexts";
import CaixaVisualizacaoMotorista from "../../Componentes/CaixaVisualizacaoMotorista";
import PerfilVisualizacao from "../../Componentes/PerfilVisualizacao";
import styles from "./VisualizarCliente.modules";
import CaixaVisualizacaoCliente from "../../Componentes/CaixaVisualizacaoCliente";


export default function VisualizarCliente() {

    const navigation = useNavigation()

    return (
        <ScrollView style={styles.geral}>

            <View>

                <PerfilVisualizacao
                    
                    fotoUser={require("../../../assets/Ana.jpeg")}
                    nomeUser={"Magnólia do corsa"}>
                </PerfilVisualizacao>


                <View style={styles.regua}>
                    <CaixaVisualizacaoCliente responsavel={"Pau"}
                        horario={"18:30"}
                        endereco={"Rua do anus"}
                        endereco2={"Positivo"}
                        evento={() => { navigation.navigate("EditarCliente") }}
                        ></CaixaVisualizacaoCliente>
                </View>

            </View>
        </ScrollView>
    )
}
