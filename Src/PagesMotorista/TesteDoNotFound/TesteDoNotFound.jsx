import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NotFound from "../../Componentes/NotFound";
import SemWifi from "../../Componentes/SemWifi";
import TurmaVazia from "../../Componentes/TurmaVazia";
import SemNotificacao from "../../Componentes/SemNotificacao";

export default function TesteDoNotFound() {

    const navigation = useNavigation();

    const irPerfil = () => {
        navigation.navigate('TabBarScreen')
    }

    return (
        <View style={styles.container}>
            <SemNotificacao/>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "white"
    }
})