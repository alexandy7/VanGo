import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from "react-native";

export default function InserirTurma({valor, evento}) {

    return(
        <View style={styles.container}>
            <View style={styles.divtexto}>
                <Text style={styles.texto}>Digite o código de sua</Text>
                <Text style={styles.texto}>turma</Text>
            </View>

            <View style={styles.divinput}>
                <View style={styles.juncaoinput}>
                    <TextInput placeholder={"Exemplo: #032843"} placeholderTextColor= "lightgray" style={styles.input} value={valor}></TextInput>
                    <TouchableOpacity onPress={evento}>
                        <Ionicons style={styles.icon} name={"chevron-forward-sharp"} size={30} color="#b1aeae"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        height: 170,
        width: "85%",
        borderRadius: 45,
        alignSelf: "center",
        elevation: 20,
        backgroundColor: "white",
    },

    divtexto:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "50%",
        width: "100%",
        alignItems: "center"
    },

    texto:{
        fontSize: 22,
    },
    
    divinput: {
        height: "50%",
        width: "100%",
        alignSelf: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row"
    },

    juncaoinput: {
        height: 40,
        width: "80%",
        borderWidth: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "lightgray",
        backgroundColor: "white",
        elevation: 3,
        paddingLeft: "5%",
        paddingRight: "3%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    input: {
        fontSize: 18,
        width: "90%"
    },
    
    icon: {
        top: 3
    }
})