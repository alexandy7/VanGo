import React from "react";
import { View, StyleSheet, Text} from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat"


export default function InputCriacao({icone, dado, mudou, valor}) {

    const [fonteLoaded] = useFonts({
        Montserrat_400Regular,
    });

    if (!fonteLoaded) {
        return null;
    }


    return(
        <View style={styles.container}>

            <View style={styles.divicon}>
                <Ionicons style={styles.icon} name={icone} size={30} color="#b1aeae"/>
            </View>

                <TextInput onChangeText={mudou} value={valor} placeholder={dado} placeholderTextColor= "lightgray" style={styles.input}></TextInput>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "80%",
        borderWidth: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "lightgray",
        backgroundColor: "white",
        elevation: 3,
        display: "flex",
        paddingLeft: "3%",
        paddingRight: "3%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignSelf: "center",
        marginBottom: 20
    },

    divicon: {
        display: "flex",
        justifyContent: "center",
        width: "14%",
    },

    input: {
        fontSize: 20,
        width: "86%",
        fontFamily: "Montserrat_400Regular"
    },
    
    icon: {
        top: 0
    }
    
})