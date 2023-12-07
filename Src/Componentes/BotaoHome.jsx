import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat"

export default function BotaoHome({icone, texto, breve}) 
{

    const [fonteLoaded] = useFonts ({
        Montserrat_400Regular
    });
    
    if (!fonteLoaded) {
        return null;
    }

    return(
        <View style={styles.container}>
            <View style= {[styles.bg, {backgroundColor: breve ? "#A9A9A9" : "#F7770D"}]}>
                <Ionicons style={styles.icone} name={icone} size={50} color='white'/>
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
        height: "55%",
        width: "90%",
        alignSelf: "center"
    },

    divtexto: {
        height: "30%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    texto:{
        fontSize: 13,
        fontFamily: "Montserrat_400Regular"
    }
})