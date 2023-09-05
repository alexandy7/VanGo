import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import Lista from "../../Componentes/Lista";

export default function ConfiguracaoMoto() {

    const navigation = useNavigation();

    const irPerfil = () => {
        navigation.navigate('TabBarScreen')
    }

    return(
        <View style= {styles.main}>
            <View style={styles.header}>
            <TouchableOpacity style={styles.seta} onPress={irPerfil}>
                    <Ionicons name="chevron-back-outline" size={30}/>
            </TouchableOpacity>
                <Text style={styles.titulo}>Configurações</Text>
            </View>

            <Text style={styles.titulocard}>Conta</Text>

            <View style={styles.card}>
                <Lista icone='person' titulo="Conta"></Lista>
                <Lista icone='lock-closed' titulo="Privacidade"></Lista>
                <Lista icone='notifications' titulo="Notificações" evento={()=>{
                    navigation.navigate('NotificaMoto')
                }}></Lista>
            </View>

            <Text style={styles.titulocard}>Motorista</Text>

            <View style={styles.card}>
                <Lista icone='eye'titulo="Ver clientes"></Lista>
                <Lista icone='cloudy-night' titulo="Visualizar turmas"></Lista>
                <Lista icone='chatbubbles' titulo="Chat" evento={()=>{
                    navigation.navigate('ListaChat')
                }}></Lista>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#EFEFEF',
    },

    header: {
        display: "flex",
        flexDirection: "row",
        height: 80,
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
        marginBottom: 50
    },

    seta: {
        position: "relative",
        right: "80%",
        top: "5%"
    },

    titulo: {
        fontSize: 26,
        position:"relative",
        alignSelf: "center",
        top: "5%"
    },

    card: {
        width: "90%",
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: "10%",
        display: 'flex',
        backgroundColor: 'white',
        position: "relative",
        marginBottom: "15%"
    },

    titulocard: {
        fontSize: 17,
        position: "relative",
        bottom: "2%",
        left: "10%"
    }
});