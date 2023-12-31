import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_600SemiBold, Montserrat_400Regular } from "@expo-google-fonts/montserrat"
import { useNavigation } from "@react-navigation/native";

export default function CardChat({ foto, nome, hora, ultimaMensagem, QuantidadeMensagem, verPerfil, verConversa }) {

    const navigation = useNavigation();

    const [fonteLoaded] = useFonts({
        Montserrat_600SemiBold,
        Montserrat_400Regular
    });

    if (!fonteLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.divimagem} activeOpacity={0.8} onPress={verPerfil}>
                <Image source={foto} style={styles.imagem} />
            </TouchableOpacity>

            {/* essa view é responsável por manter a view superior e a inferior alinhadas dentro da caixa,
             já que o flex direction Column não funciona devidamente nesse caso*/}

            <TouchableOpacity style={styles.divjuncao} onPress={verConversa}>

                <View style={styles.divsuperior}>
                    <Text style={styles.nome}>{nome}</Text>
                    <Text style={styles.tempo}>{hora}</Text>
                </View>

                <View style={styles.divinferior}>
                    <View style={styles.divmensagem}>
                        <Text style={styles.mensagem}>{ultimaMensagem}</Text>
                    </View>

                    {
                        QuantidadeMensagem > 0 ? (
                            <View style={styles.divQuantidadeMensagem}>
                                <Text style={styles.quantidadeMensagem}>{QuantidadeMensagem}</Text>
                            </View>
                        )
                            :
                            (
                                <View></View>
                            )
                    }
                </View>

            </TouchableOpacity>

        </View>

    )

}

const styles = StyleSheet.create({

    container: {
        width: '95%',
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
        marginTop: 3,
        fontFamily: "Montserrat_600SemiBold"
    },

    tempo: {
        fontSize: 15,
        color: "#696969",
        marginTop: 3,
        fontFamily: "Montserrat_400Regular"
    },

    divmensagem: {
        height: "100%",
        display: "flex",
        flexDirection: "row",
        width: "85%",
    },

    mensagem: {
        fontSize: 15,
        marginTop: 3,
        fontFamily: "Montserrat_400Regular"
    },

    divQuantidadeMensagem: {
        height: "100%",
        width: "15%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },

    quantidadeMensagem: {
        fontSize: 16,
        backgroundColor: "orange",
        borderRadius: 27,
        width: 27,
        height: 27,
        textAlignVertical: "center",
        textAlign: "center",
        color: "white",
        fontFamily: "Montserrat_600SemiBold"
    },

})