import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function InfoPerfil({ imagemtitulo, titulo, subtitulo }) {

    return (
        <View style={styles.geral}>

            <View style={styles.cima}>
            <Ionicons name={imagemtitulo} color={'grey'} size={30} style={styles.icone} />
                <Text style={styles.titulo}>{titulo}</Text>
            </View>
            <Text style={styles.subtitulo}>{subtitulo}</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        geral:{
            flexDirection: "column",
            alignItems: "center",
            padding: 15,
            minWidth: 160,
            justifyContent: "space-between"
        },

        cima:{
            flexDirection: "row",
            alignItems: "center"
        },


        titulo:{
            paddingLeft: 10,
            color: "black"
        },

        subtitulo:{
            color: "grey"
        }


    }
) 