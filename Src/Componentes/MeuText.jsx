import React from 'react';
import { View, TextInput, Image } from "react-native";
import { StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat"

export default function MeuText({ nomePlaceholder, icon, valorInput, mudou, borda, corBorda }) {

    const [fonteLoaded] = useFonts({
        Montserrat_400Regular,
    });

    if (!fonteLoaded) {
        return null;
    }

    return (
        <View style={[styles.inpute, {borderWidth: borda, borderColor: corBorda}]}>

         <Ionicons name={icon} size={24} color="#b1aeae" />

            <TextInput
            placeholder={nomePlaceholder}
            style={styles.espacamento}
            value={valorInput}
            onChangeText={mudou}
            />

        </View>
    )
}

const styles = StyleSheet.create(
    {
        inpute: {
            borderRadius: 10,
            width: 273,
            height: 45,
            marginTop: "4%",
            backgroundColor: '#C4C4C433',
            paddingLeft: 10,
            alignItems: 'center',
            textAlign: 'center',
            flexDirection: 'row',
            alignSelf: 'center'
        },

        espacamento:{
            marginLeft: 13, //Espaço entre a imagem e o placeholder
            width: 220,
            fontFamily: "Montserrat_400Regular"
        }
    }
)