import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useFonts, Montserrat_600SemiBold} from "@expo-google-fonts/montserrat"

export default function SolicitacaoRecusada({turma}) {

        const [fonteLoaded] = useFonts({
            Montserrat_600SemiBold,
        });
    
        if (!fonteLoaded) {
            return null;
        }

    return(
        <View style={styles.container}>
            <Image style={styles.imagem} source={require("../../assets/SolicitacaoRecusada.gif")}/>  
            <Text style={styles.texto}>Sua solicitação de entrada para a {"turma exemplo"} foi recusada!</Text>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        height: 300,
        width: 300,
        position: "absolute",
        alignSelf: "center",
        transform: [{ translateY: -170 }],
        top: "50%",
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