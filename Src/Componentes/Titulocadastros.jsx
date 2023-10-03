import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat"

export default function TituloCadastro({textoh1, textoh2}) {

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular
    });

    if (!fonteLoaded) {
        return null;
    }

    return (
        <View>
            <Image source={require('../../assets/Logo.png')} style={styles.imagem}/>

            <Text style={styles.titulo}>{textoh1}</Text>
            <Text style={styles.msg}>{textoh2}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    msg: {
        textAlign: 'center',
        fontSize: 13,
        color: 'rgb(145, 138, 138)',
        fontFamily: "Montserrat_400Regular"
    },

    titulo: {
        textAlign: 'center',
        fontSize: 25,
        fontFamily: "Montserrat_500Medium"
    },
    
    imagem: {
        top: 15,
        alignSelf: 'center',
        width: 130,
        height: 100,
    }
})
