import React, {} from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./TelaSolicitacao.modules";
import Solicitacao from "../../Componentes/Solicitacao";

export default function TelaSolicitacao() {

    const navigation = useNavigation();

    const irPerfil = () => {
        navigation.navigate('TabBarScreen')
    }

    const hoje = new Date(); // Pegando o dia de hoje 

    return(
        <ScrollView style={styles.scroll}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.seta} onPress={irPerfil}>
                    <Ionicons name="chevron-back-outline" size={30} />
                </TouchableOpacity>

                <Text style={styles.titulo}>Solicitações</Text>
            </View>

            <Solicitacao imagem={require("../../../assets/Ana.jpeg")} nome={"Ana Clara"} hora={"12:40"} turma={"Turma da Manhã"}/>
            <Solicitacao imagem={require("../../../assets/fazueli.jpg")} nome={"João Lino"} hora={"18:00"} turma={"boate Gay"}/>
            <Solicitacao imagem={require("../../../assets/helpme.jpg")} nome={"Yago..."} hora={"00:00"} turma={"cama e não acordar"}/>

        </ScrollView>
    )
}