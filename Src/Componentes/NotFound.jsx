import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default function NotFound() {

    return(
        <View style={styles.container}>
            <Image style={styles.imagem} source={require("../../assets/Naoencontrado.jpeg")}/>  
            <Text style={styles.texto}>Ops, não encontrado</Text>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        height: 300,
        width: 300,
    },

    imagem: {
        height: 180,
        width: 240,
        alignSelf: "center"
    },

    texto: {
        fontSize: 23,
        fontWeight: "bold",
        textAlign: "center"
    }

})