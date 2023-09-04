import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function CardChat({foto, nome, hora, ultmensagem, qtde}) 
{

    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.divimagem}>
                <Image source={foto} style={styles.imagem}/>
            </View>

            {/* essa view é responsável por manter a view superior e a inferior alinhadas dentro da caixa,
             já que o flex direction Column não funciona devidamente nesse caso*/}

            <View style={styles.divjuncao}>

                <View style={styles.divsuperior}>
                    <Text style={styles.nome}>{nome}</Text>
                    <Text style={styles.tempo}>{hora}</Text>
                </View>

                <View style={styles.divinferior}>
                    <View style={styles.divmensagem}>
                        <Text style={styles.mensagem}>{ultmensagem}</Text>
                    </View>

                    <View style={styles.divqtde}>
                        <Text style={styles.qtde}>{qtde}</Text>
                    </View>
                </View>

            </View>

        </TouchableOpacity>

    )

}

const styles = StyleSheet.create({

    container: {
        width: '90%',
        height: 80,
        alignSelf: 'center',
        marginBottom: 10,
        display: 'flex',
        flexDirection: "row",
  },

    divimagem: {
        width: "25%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    imagem: {
        height: "80%",
        width: "80%",
        borderRadius: 20,
    },

    divjuncao: {
        width: "75%",
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },

    divsuperior: {
        height: "50%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    divinferior: {
        height: "50%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    nome: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 3
    },

    tempo: {
        fontSize: 16,
        color: "#696969",
        marginTop: 3
    },

    divmensagem: {
        height: "100%",
        display: "flex",
        flexDirection: "row",
        width: "85%",
    },

    mensagem: {
        fontSize: 15,
        marginTop: 3
    },

    divqtde: {
        height: "100%",
        width: "15%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },

    qtde: {
        fontSize: 16,
        marginRight: "5%",
        backgroundColor: "orange",
        borderRadius: 27,
        width: 27,
        height: 27,
        textAlignVertical: "center",
        textAlign: "center",
        color: "white",
        fontWeight: "bold"
    },

})