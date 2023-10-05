import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useFonts, Montserrat_600SemiBold} from "@expo-google-fonts/montserrat"

export default function SemNotificacao() {

        

        const [fonteLoaded] = useFonts({
            Montserrat_600SemiBold,
        });
    
        if (!fonteLoaded) {
            return null;
        }

    return(
        <View style={styles.container}>
            <Image style={styles.imagem} source={require("../../assets/semNotificacao.png")}/>  
            <Text style={styles.texto}>Você ainda não recebeu nenhuma notificação</Text>
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
        height: "80%",
        width: "100%",
        alignSelf: "center",

    },

    texto: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Montserrat_600SemiBold"
    }

})