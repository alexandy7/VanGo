import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useFonts, Montserrat_600SemiBold} from "@expo-google-fonts/montserrat"

export default function TurmaVazia() {

        

        const [fonteLoaded] = useFonts({
            Montserrat_600SemiBold,
        });
    
        if (!fonteLoaded) {
            return null;
        }

    return(
        <View style={styles.container}>
            <Image style={styles.imagem} source={require("../../assets/TesteDeComponente.png")}/>  
            <Text style={styles.texto}>Você ainda não adicionou alunos nessa turma</Text>
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
        height: "30%",
        width: "45%",
        alignSelf: "center"
    },

    texto: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Montserrat_600SemiBold"
    }

})