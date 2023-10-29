import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat"

export default function BalaoChatVoce({mensagem, hora}) 
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
        alignSelf: "flex-start",
        // backgroundColor: "#F7770D",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: 7,
        marginBottom: 7
    },

    balao: {
        backgroundColor: "#C4C4C433",
        padding: 7,
        display: "flex",
        flexDirection: "row",
        borderTopEndRadius: 15,
        borderBottomEndRadius: 15,
        justifyContent: "space-between"

    },

    texto: {
        textAlign: "auto",  
        fontSize: 17,
        fontFamily: "Montserrat_400Regular",
        color: "#252525",
        paddingRight: 50,
        paddingLeft: 5
    },

    hora: {  
        fontSize: 13,
        fontFamily: "Montserrat_400Regular",
        color: "#252525",
        right: 10,
        position: "absolute",
        top: 9
    }

});