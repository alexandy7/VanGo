import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat"

export default function BotaoGeral({icone, texto, evento, tamanho}) 
{

    const [fonteLoaded] = useFonts ({
        Montserrat_400Regular
    });
    
    if (!fonteLoaded) {
        return null;
    }

    return(
        <TouchableOpacity style={styles.container} onPress={evento}>
        <View style={styles.alinhainicio}>
            <Text></Text>
        </View>

        <View style={styles.alinhameio}>
            <Text style={styles.texto}>{texto}</Text>
        </View>

        <View style={styles.alinhafim}>
            <Ionicons style={styles.icon} name={icone} size={30} color="white" />
        </View>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    container: {
        display: "flex",
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#F7770D",
        borderRadius: 15,
        display: "flex",
        flexDirection: "row",
        marginTop: 20
    },

    texto: {
        fontSize: 26,
        color: "white",
        fontFamily: "Montserrat_500Medium"
    },

    icon: {
        top: 0
    },

    alinhainicio: {
        width: "15%",
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    
    alinhameio: {
        width: "70%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },

    alinhafim: {
        width: "15%",
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-start"
    },

});