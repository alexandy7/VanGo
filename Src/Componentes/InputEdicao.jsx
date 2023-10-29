import React from "react";
import { View, StyleSheet, Text} from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from "react-native";
import { useFonts, Montserrat_400Regular} from "@expo-google-fonts/montserrat"

export default function InputEdicao({dado, valor, mudou, sombra}) {

    const [fonteLoaded] = useFonts ({
        Montserrat_400Regular
    });

    if (!fonteLoaded) {
        return null;
    }

    return(
        <View style={[styles.container, {elevation: sombra ? 0 : 3,}]}>

                <TextInput 
                placeholder={dado}  
                value={valor}
                onChangeText={mudou}
                placeholderTextColor="#b8b8b8" 
                style={styles.input}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: "85%",
        borderRadius: 10,
        backgroundColor: "#f7f7f7",
        display: "flex",
        paddingLeft: "3%",
        paddingRight: "3%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignSelf: "center",
        marginBottom: 18
    },

    input: {
        fontSize: 14,
        width: "100%",
        fontFamily: "Montserrat_400Regular"
    },
    
    icon: {
        top: 1
    }
    
})