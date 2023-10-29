import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function Solicitacao({ imagem, nome, hora, turma, onAceitar, onRecusar, cancelar, onCancelar }) {
    return (
        <View style={styles.container}>
            <View style={styles.divimagem}>
                <Image source={imagem} style={styles.imagem}></Image>
            </View>

            <View style={styles.alinhamento}>

                {/* São colocadas 3 camadas de Div para alinhar os componentes */}
                <View style={styles.divsuperior}>
                    <Text style={styles.nome}>{nome}</Text>
                    <Text style={styles.hora}>{hora}</Text>
                </View>

                <View style={styles.divmeio}>
                    <Text style={styles.descricao}>Quer entrar na {turma}</Text>
                </View>

                {
                    cancelar ? (
                        <View style={styles.viewCancelar}>
                            <TouchableOpacity style={styles.BotaoCancelar} onPress={onCancelar}>
                                <Text style={{textAlign: "center"}}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    )
                        :
                        (

                            <View style={styles.divinferior}>
                                <TouchableOpacity style={styles.botaoaceitar} onPress={onAceitar}>
                                    <Text style={styles.textoaceitar}>Aceitar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.botaorecusar} onPress={onRecusar}>
                                    <Text style={styles.textorecusar}>Recusar</Text>
                                </TouchableOpacity>
                            </View>
                        )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 120,
        borderColor: '#F7770D',
        borderRadius: 20,
        alignSelf: 'center',
        borderWidth: 1,
        marginBottom: 15,
        display: "flex",
        flexDirection: "row",
    },

    divimagem: {
        width: "25%",
        display: "flex",
        alignItems: "center"
    },

    imagem: {
        height: "60%",
        width: "80%",
        borderRadius: 20,
        marginTop: 10,
    },

    alinhamento: {
        display: "flex",
        flexDirection: "column",
        width: "75%",
    },

    divsuperior: {
        height: "35%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    nome: {
        fontSize: 24,
        marginLeft: "3%"
    },

    hora: {
        fontSize: 18,
        color: "#383838",
        marginRight: "5%"
    },

    divmeio: {
        height: "25%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    descricao: {
        fontSize: 14,
        marginLeft: "3%"
    },

    icone: {
        marginRight: "5%"
    },

    divinferior: {
        height: "40%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    botaoaceitar: {
        height: "70%",
        width: "40%",
        backgroundColor: "#F7770D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "3%",
        borderRadius: 20
    },

    botaorecusar: {
        height: "70%",
        width: "40%",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "orange",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "5%",
        borderRadius: 20
    },

    textoaceitar: {
        fontSize: 17,
        color: "white"
    },

    textorecusar: {
        fontSize: 17
    },

    BotaoCancelar:{
        borderWidth: 1,
        width: "65%",
        height: 30,
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 10
    }
})
