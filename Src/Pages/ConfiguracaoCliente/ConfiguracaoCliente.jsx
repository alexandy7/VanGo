import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import Lista from "../../Componentes/Lista";
import styles from "./ConfiguracaoCliente.modules"
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat"

export default function ConfiguracaoMoto() {

    const navigation = useNavigation();

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular
    });

    if (!fonteLoaded) {
        return null;
    }

    return(
        <View style= {styles.main}>
            <View style={styles.header}>

                <View style={styles.divesquerda}>
                    <TouchableOpacity style={styles.seta} onPress={() => navigation.goBack()}>
                            <Ionicons name="chevron-back-outline" size={30}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.divmeio}>
                    <Text style={styles.titulo}>Configurações</Text>
                </View>

                <View style={styles.divdireita}>

                </View>
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
  