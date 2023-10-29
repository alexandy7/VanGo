import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useFonts, Montserrat_600SemiBold} from "@expo-google-fonts/montserrat"

export default function NotFound() {

        

        const [fonteLoaded] = useFonts({
            Montserrat_600SemiBold,
        });
    
        if (!fonteLoaded) {
            return null;
        }

    return(
        <View style={styles.container}>
            <Image style={styles.imagem} source={require("../../assets/naoEncontrado.png")}/>  
            <Text style={styles.texto}>Nada por aqui</Text>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        height: 300,
        width: 300,
        position: "absolute",
        alignSelf: "center",
        marginTop: "14%",
        justifyContent: "center",
    },

    imagem: {
        height: "40%",
        width: "70%",
        alignSelf: "center"
    },

    texto: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Montserrat_600SemiBold"
    }

})