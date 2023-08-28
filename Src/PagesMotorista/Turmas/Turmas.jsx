import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./Turmas.modules";
import BarraDePesquisa from "../../Componentes/BarraDePesquisa";
import CardAluno from "../../Componentes/CardAluno";


export default function Turmas({nometurma}) {

    const navigation = useNavigation();

    const irPerfil = () => {
        navigation.navigate('TabBarScreen')
    }


    return (
        
        <ScrollView style={styles.scroll}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.seta} onPress={irPerfil}>
                    <Ionicons name="chevron-back-outline" size={30} />
                </TouchableOpacity>

                <Text style={styles.titulo}>{"Turma Exemplo"}</Text>

            </View>

            <BarraDePesquisa placeholder={"Exemplo: Rodrigo Lopes"}/>

            <View style={styles.alinhabotoes}>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textobotao}>Todos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textobotao}>Presentes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textobotao}>Ausentes</Text>
                </TouchableOpacity>
            </View>

            <CardAluno foto={require('../../../assets/fazueli.jpg')} nome={"João Silva Lino"} escola={"C.M Colaço"}></CardAluno>
            <CardAluno foto={require('../../../assets/Ana.jpeg')} nome={"Ana Clara"} escola={"E.E Alguma outra"}></CardAluno>
            <CardAluno foto={require('../../../assets/manoelgomes.jpg')} nome={"Manoel Gomes"} escola={"C.A Neta azul"}></CardAluno>
            <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>


        </ScrollView>
    )
}