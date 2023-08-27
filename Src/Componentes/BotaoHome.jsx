import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function BotaoHome({icone, texto}) 
{
    return(
        <View style={styles.container}>
            <View style= {styles.bg}>
                <Ionicons style={styles.icone} name={icone} size={60} color='white'/>
            </View>

            <View style= {styles.divtexto}>
                <Text style={styles.texto}>{texto}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex"
    },

    bg: {
        backgroundColor: "#F7770D",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        height: "65%",
        width: "100%"
    },

    divtexto: {
        height: "30%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    texto:{
        fontSize: 14 
    }
})