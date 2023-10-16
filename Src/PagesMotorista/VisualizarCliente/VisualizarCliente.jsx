import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Perfil";
import { UserData } from "../../services/Contexts/Contexts";
import PerfilVisualizacao from "../../Componentes/PerfilVisualizacao";
import styles from "./VisualizarCliente.modules";
import CaixaPerfil from "../../Componentes/CaixaPerfil";
import { Ionicons } from '@expo/vector-icons'


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
                    <CaixaPerfil 
                        texto1={"Noemia"}
                        titulotexto1={"Responsável"}
                        icontexto1={"person-outline"}
                        texto2={"06:00-12:00"}
                        titulotexto2={"Horário"}
                        icontexto2={"time-outline"}
                        texto3={"Rua da aids"}
                        titulotexto3={"Endereço"}
                        icontexto3={"home-outline"}
                        texto4={"Positivo"}
                        titulotexto4={"Status"}
                        icontexto4={"calendar-outline"}
                        brushOrChat={"chatbubbles"}
                        evento={() => { navigation.navigate("EditarCliente") }}
                        ></CaixaPerfil>
                </View>

            </View>
        </ScrollView>
    )
}
