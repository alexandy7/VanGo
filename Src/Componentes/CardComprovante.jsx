import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat"

export default function CardComprovante({ item, DataPagamento, verComprovante }) {


    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular
    });

    if (!fonteLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={styles.divanexo}>
                <View style={styles.icone}>
                    <Ionicons name='lock-closed' size={28} color='white' />
                </View>

                <View style={{marginLeft: 10, borderLeftWidth: 0.5, borderColor: "black", height: 50, paddingLeft: 15}}>
                    <Text style={styles.textocomprovante}>Comprovante</Text>
                    <View style={{flexDirection: "row"}}>
                        <Text style={{color: "#00B383", fontWeight: "bold"}}>Pagamento: </Text>
                        <Text>{DataPagamento}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={verComprovante} style={{justifyContent: "center", left: "150%"}}>
                    <Ionicons name='chevron-forward' size={28} color='black' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: 'center',
        marginBottom: 8,
        display: "flex",
        flexDirection: "row",
        backgroundColor: 'white',
        marginTop: "3%",
    },

    divanexo: {
        flexDirection: "row",
    },

    icone: {
        backgroundColor: "#F7770D",
        borderRadius: 30,
        height: 50,
        width: 52,
        alignItems: "center",
        justifyContent: "center"
    },

    textocomprovante: {
        fontSize: 18,
        position: "relative",
        fontFamily: "Montserrat_500Medium"
    },

})
