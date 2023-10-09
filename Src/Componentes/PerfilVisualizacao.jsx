import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"

export default function PerfilVizualizacao({ fotoUser, nomeUser, evento }) {

        const [fonteLoaded] = useFonts({
            Montserrat_500Medium,
        });
    
        if (!fonteLoaded) {
            return null;
        }

    return (
        <View style={styles.geral}>

            <View style={styles.fotoNome}>
                <Image source={fotoUser} style={styles.imagem} />
                <Text style={styles.nome}>{nomeUser}</Text>
            </View>

        </View>
    );

}

const styles = StyleSheet.create(
    {
        geral: {
            backgroundColor: "#E46C08",
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
            height: 300,
        },

        fotoNome:{
            alignSelf: "center",
            top: 55
        },

        imagem:{
            height: 120,
            width: 130,
            alignSelf: "center",
            borderRadius: 25,
            
            
        },

        nome:{
            color: "white",
            fontSize: 25,
            alignSelf: "center",
            fontFamily: "Montserrat_500Medium"
        }
    }
)