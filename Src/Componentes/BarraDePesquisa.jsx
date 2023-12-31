import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from "react-native";
import { useFonts, Montserrat_400Regular} from "@expo-google-fonts/montserrat"

export default function BarraDePesquisa({placeholder, valor, change}) {

    const [fonteLoaded] = useFonts ({
        Montserrat_400Regular
    });

    if (!fonteLoaded) {
        return null;
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.alinhaicon}>
                <Ionicons style={styles.icon} name={"search"} size={30} color="#b1aeae"/>
        </TouchableOpacity>
            <View style={styles.alinhainput}>
                <TextInput placeholder={placeholder} 
                placeholderTextColor="#b1aeae" 
                style={styles.input} 
                value={valor}
                onChangeText={change}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        height: 35,
        width: "90%",
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