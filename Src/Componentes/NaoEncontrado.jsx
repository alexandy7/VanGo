import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useFonts, Montserrat_600SemiBold} from "@expo-google-fonts/montserrat"

export default function NaoEncontrado({mensagem}) {

        const [fonteLoaded] = useFonts({
            Montserrat_600SemiBold,
        });
    
        if (!fonteLoaded) {
            return null;
        }

    return(
        <View style={styles.container}>
            <Image style={styles.imagem} source={require("../../assets/naoEncontrado.png")}/>  
            <Text style={styles.texto}>{mensagem}</Text>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        height: 300,
        width: 300,
        alignSelf: "center",
        justifyContent: "center",
    },

    imagem: {
        height: "60%",
        width: "80%",
        alignSelf: "center",

    },

    texto: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Montserrat_600SemiBold"
    }

})