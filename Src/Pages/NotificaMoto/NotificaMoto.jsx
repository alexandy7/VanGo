import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import Notificacao from "../../Componentes/Common/Notificacao";

export default function NotificaMoto() {

    const navigation = useNavigation();

    const irPerfil = () => {
        navigation.navigate('TabBarScreen')
    }

    return(
        <ScrollView>
            <View style={styles.header}>
                <TouchableOpacity style={styles.seta} onPress={irPerfil}>
                    <Ionicons name="chevron-back-outline" size={30}/>
                 </TouchableOpacity>

                <Text style={styles.titulo}>Notificações</Text>
            </View>
                <Notificacao fotouser={require('../../../assets/gato.jpg')} nomeuser="Matriona" info="Enviou o comprovante" hora="14:34" icone="image-sharp"/>
                <Notificacao fotouser={require('../../../assets/UserPhoto.png')} nomeuser="Karen" info="Enviou uma mensagem" hora="10:20" icone="chatbubbles-sharp"/>
                <Notificacao/>
                <Notificacao/>
                <Notificacao/>
                <Notificacao/>
                <Notificacao/>
                <Notificacao/>
                <Notificacao/>
        </ScrollView>
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
    
});