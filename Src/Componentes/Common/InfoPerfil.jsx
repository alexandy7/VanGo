import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default function InfoPerfil({ imagemtitulo, titulo, subtitulo }) {

    return (
        <View style={styles.geral}>

            <View style={styles.img}>
                <Image source={imagemtitulo} style={styles.imagem} />
                <Text style={styles.titulo}>{titulo}</Text>
            </View>
            <Text style={styles.subtitulo}>{subtitulo}</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        subtitulo: {
            color: 'grey',
            left: 30
        },

        img: {
            height: 37, //deixa as fotos das informações maiores para n ficarem cortadas
            flexDirection: "row",
            alignItems: "center",
            marginBottom: -10
        },

        geral: {
            marginRight: 40, //serve pra dar um espaço entre as informações
            marginLeft: 10,
            flexDirection: 'column',
            top: 20
        },



        titulo: {
            left: 10
        }


    }
) 