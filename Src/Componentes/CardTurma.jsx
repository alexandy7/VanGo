import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function CardTurma({nome, chave, horarioinic,horariofin}) {

    return(
        <View style={styles.container}>
            <View style={styles.divsuperior}>
                <Text style={styles.titulo}>{nome}</Text>
                <Text style={styles.txtsecundario}>{chave}</Text>
            </View>

            <View style={styles.divinferior}>
                <View style={styles.juncao1}>
                    <Ionicons name='time' size={20} color='orange'/>
                    <Text style={styles.info}>{horarioinic} - {horariofin}</Text>
                </View>

                <View style={styles.juncao2}>
                    <Ionicons name='key' size={20} color='orange'/>
                    <Text style={styles.info}>{"#123002"}</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        height: 100,
        width: "80%",
        borderWidth: 1,
        borderRadius: 30,
        borderColor: "orange",
        marginTop: 25,
        alignSelf: "center",
        display: "flex",
        backgroundColor: "white",
        elevation: 5,
        marginBottom: 20
    },

    divsuperior: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        height: "50%",
        width: "100%",
    },

    divinferior: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        height: "50%",
        width: "100%"
    },

    titulo: {
        fontSize: 21,
        marginLeft: "5%",
        marginBottom: "1%"
    },

    txtsecundario: {
        fontSize: 18,
        color: "orange",
        marginRight: "5%",
        marginBottom: "1%"
    },

    info: {
        fontSize: 17,
        color: "gray"
    },

    juncao1: {
        display: "flex",
        flexDirection: "row",
        marginLeft: "5%"
    },

    juncao2: {
        display: "flex",
        flexDirection: "row",
        marginRight: "5%"
    }
})