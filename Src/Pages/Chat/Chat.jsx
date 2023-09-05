import { ScrollView, StyleSheet, Text, View, Image, navigation } from "react-native";
import { useContext, useEffect, useState } from "react";
import styles from "./Chat.modules";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import BarraDePesquisaChat from "../../Componentes/BarraDePesquisaChat";
import CardChat from "../../Componentes/CardChat";
import { useNavigation } from "@react-navigation/native";

export default function Chat() {

    const navigation = useNavigation();

    const irHome = () => {
        navigation.navigate('TabBarScreen')
    }

    return(
        <ScrollView style={styles.scroll}>
            <View style={styles.header}>
                <View style={styles.alinhaseta}>
                    <TouchableOpacity onPress={irHome}>
                        <Ionicons name="chevron-back-outline" size={30} color={"white"}/>
                    </TouchableOpacity>
                </View>  
                
                {/* Foram criadas duas views separadas que formam o desenho de apenas uma,
                o elemento do topo da página não se enquadra na lógica das flexbox */}
                <View style={styles.alinhatexto}>
                    <Text style={styles.titulo}>Mensagem</Text>
                </View>      
            </View>

            <View style={styles.alinhabarra}>
                <BarraDePesquisaChat placeholder={"Exemplo: Jonathan Joestar"}/>
            </View>

            <CardChat foto={require("../../../assets/fazueli.jpg")} nome={"João L"} hora={"20:38"} ultmensagem={"Já pode fazer o L?"} qtde={8}/>
            <CardChat foto={require("../../../assets/Ana.jpeg")} nome={"Ana Clara "} hora={"12:00"} ultmensagem={"Você: Certo, enviei o crac..."} qtde={""}/>
            <CardChat foto={require("../../../assets/misericordia.jpg")} nome={"Misericórdia"} hora={"01:00"} ultmensagem={"Misericórdia"} qtde={42}/>

             
                
        </ScrollView>
    )

}
