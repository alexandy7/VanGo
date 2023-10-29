import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useFonts, Montserrat_600SemiBold} from "@expo-google-fonts/montserrat"

export default function SemWifi() {

        const [fonteLoaded] = useFonts({
            Montserrat_600SemiBold,
        });
    
        if (!fonteLoaded) {
            return null;
        }

    return(
        <View style={styles.container}>
            <Image style={styles.imagem} source={require("../../assets/SemWifi.png")}/>  
            <Text style={styles.texto}>Verifique sua conexão.</Text>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignSelf: "center",
        marginTop: "20%"
    },

    imagem: {
        alignSelf: "center",
        resizeMode: "contain",
        height: 180
    },

    texto: {
        fontSize: 17,
        textAlign: "center",
        fontFamily: "Montserrat_600SemiBold"
    }

})