import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
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
        alignSelf: "center",
        justifyContent: "center",
        gap: 20
    },

    imagem: {
        height: "60%",
        width: "95%",
        alignSelf: "center"
    },

    texto: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Montserrat_600SemiBold"
    }

})