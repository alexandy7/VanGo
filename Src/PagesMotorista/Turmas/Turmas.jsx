import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./Turmas.modules";
import BarraDePesquisa from "../../Componentes/BarraDePesquisa";
import CardAluno from "../../Componentes/CardAluno";
import { useFonts, Montserrat_500Medium} from "@expo-google-fonts/montserrat"


export default function Turmas({nometurma}) {

    const navigation = useNavigation();

    const irPerfil = () => {
        navigation.navigate('TabBarScreen')
    }

    const [fonteLoaded] = useFonts ({
        Montserrat_500Medium,
    });

    if (!fonteLoaded) {
        return null;
    }


    return (
        <View style={styles.main}>
        
            <View style={styles.header}>
                <View style={styles.divesquerda}>
                    <TouchableOpacity style={styles.seta} onPress={()=>{navigation.goBack()}}>
                        <Ionicons name="chevron-back-outline" size={30}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.divmeio}>
                    <Text style={styles.titulo}>Turma Exemplo</Text>
                </View>

                <View style={styles.divdireita}>

                </View>

                <View style={styles.divbarra}>
                    <BarraDePesquisa placeholder={"Exemplo: Rodrigo Lopes"}/>
                </View>
            </View>

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

            <ScrollView style={styles.scroll}>

                <CardAluno foto={require('../../../assets/fazueli.jpg')} nome={"João Silva Lino"} escola={"C.M Colaço"}></CardAluno>
                <CardAluno foto={require('../../../assets/Ana.jpeg')} nome={"Ana Clara"} escola={"E.E Alguma outra"}></CardAluno>
                <CardAluno foto={require('../../../assets/manoelgomes.jpg')} nome={"Manoel Gomes"} escola={"C.A Neta azul"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>
                <CardAluno foto={require('../../../assets/gato.jpg')} nome={"Gato"} escola={"Porque gato é legal"}></CardAluno>

            </ScrollView>
        </View>
    )
}