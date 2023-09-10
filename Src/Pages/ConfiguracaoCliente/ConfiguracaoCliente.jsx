import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import Lista from "../../Componentes/Lista";
import styles from "./ConfiguracaoCliente.modules"

export default function ConfiguracaoMoto() {

    const navigation = useNavigation();

    return(
        <View style= {styles.main}>
            <View style={styles.header}>
            <TouchableOpacity style={styles.seta} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-outline" size={30}/>
            </TouchableOpacity>
                <Text style={styles.titulo}>Configurações</Text>
            </View>

            <Text style={styles.titulocard}>Conta</Text>

            <View style={styles.card}>
                <Lista icone='person' titulo="Conta"></Lista>
                <Lista icone='lock-closed' titulo="Privacidade"></Lista>
                <Lista icone='notifications' titulo="Notificações" evento={()=>{
                    navigation.navigate('NotificacaoCliente')
                }}></Lista>
            </View>

            <Text style={styles.titulocard}>Motorista</Text>

            <View style={styles.card}>
                <Lista icone='eye'titulo="Ver motorista"></Lista>
                <Lista icone='cloudy-night' titulo="Visualizar turma"></Lista>
                <Lista icone='chatbubbles' titulo="Chat" evento={()=>{
                    navigation.navigate('ListaChat')
                }}></Lista>
            </View>
        </View>
    )
}
  