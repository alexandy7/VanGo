import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat"

export default function BalaoChatEu({mensagem, hora}) 
{

    const [fonteLoaded] = useFonts ({
        Montserrat_400Regular
    });
    
    if (!fonteLoaded) {
        return null;
    }

    return(
        <View style={styles.container}>
            <View style={styles.balao}>
                <Text style={styles.texto}>{mensagem}</Text>
                <Text style={styles.hora}>{hora}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        display: "flex",
        width: "60%",
        alignSelf: "flex-end",
        // backgroundColor: "#F7770D",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 7,
        marginBottom: 7
    },

    balao: {
        backgroundColor: "#F99A4C",
        padding: 7,
        display: "flex",
        flexDirection: "row",
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        justifyContent: "space-between"

    },

    texto: {
        textAlign: "auto",  
        fontSize: 17,
        fontFamily: "Montserrat_400Regular",
        color: "white",
        paddingRight: 50,
    },

    hora: {  
        fontSize: 13,
        fontFamily: "Montserrat_400Regular",
        color: "white",
        right: 10,
        position: "absolute",
        top: 9
    }

});