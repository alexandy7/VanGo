import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NotFound from "../../Componentes/NotFound";

export default function TesteDoNotFound() {

    const navigation = useNavigation();

    const irPerfil = () => {
        navigation.navigate('TabBarScreen')
    }

    return (
        <View style={styles.container}>
            <NotFound/>
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