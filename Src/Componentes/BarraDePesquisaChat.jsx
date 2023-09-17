import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat"

export default function BarraDePesquisaChat({placeholder, valor}) {

    const [fonteLoaded] = useFonts({
        Montserrat_400Regular,
    });

    if (!fonteLoaded) {
        return null;
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.alinhaicon}>
                <Ionicons style={styles.icon} name={"search-outline"} size={30} color="#e6e6e6"/>
        </TouchableOpacity>
            <View style={styles.alinhainput}>
                <TextInput placeholder={placeholder} placeholderTextColor= "#e6e6e6" style={styles.input} value={valor}></TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        height: 38,
        width: "80%",
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        alignSelf: "center",
        borderRadius: 25,
        display: "flex",
        flexDirection: "row"
        },

        alinhaicon: {
            height: "100%",
            width: "15%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        
        alinhainput: {
            height: "100%",
            width: "85%",
            display: "flex",
            justifyContent: "center"
        },

        input: {
            fontSize: 15,
            height: "100%",
            fontFamily: "Montserrat_400Regular"
        }
    
})