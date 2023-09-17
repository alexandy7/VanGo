import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_600SemiBold, Montserrat_400Regular} from "@expo-google-fonts/montserrat"

export default function CardAluno({foto, nome, escola}) 
{

    const [fonteLoaded] = useFonts ({
        Montserrat_600SemiBold,
        Montserrat_400Regular
    });

    if (!fonteLoaded) {
        return null;
    }

    return(
        <View style={styles.container}>
            <View style={styles.divimagem}>
                <Image source={foto} style={styles.imagem}></Image>
            </View>

            <View style={styles.divtexto}>
                <Text style={styles.nome}>{nome}</Text>
                <Text style={styles.escola}>{escola}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        width: "90%",
        height: 80,
        borderColor: 'green',
        borderRadius: 25,
        alignSelf: 'center',
        borderWidth: 1,
        marginBottom: 10,
        display: "flex",
        flexDirection: "row",
        backgroundColor: 'white',
        elevation: 5
    },

    divimagem: {
        width: "25%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    imagem: {
        height: "70%",
        width: "70%",
        borderRadius: 20,
    },

    divtexto: {
        width: "75%",
        display: "flex",
        justifyContent: "flex-start",
        paddingLeft: "3%"
    },

    nome: {
        fontSize: 22,
        position: "relative",
        top: "10%",
        fontFamily: "Montserrat_600SemiBold"
    },

    escola: {
        fontSize: 14,
        top: "10%",
        fontFamily: "Montserrat_400Regular"
    }



})