import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default function NotFound() {

    return(
        <View style={styles.container}>
            <Image style={styles.imagem} source={require("../../assets/Naoencontrado.jpeg")}/>  
            <Text style={styles.texto}>Ops, nada por aqui</Text>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        height: 300,
        width: 300,
        alignSelf: "center",
        justifyContent: "center",
    },

    imagem: {
        height: "30%",
        width: "45%",
        alignSelf: "center"
    },

    texto: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    }

})