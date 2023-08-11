import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function CardComprovante({item}) 
{

    return(
        <View style={styles.container}>
            <View style={styles.divanexo}>
                <Ionicons name='eye' size={25} color='#F7770D'/>
                <Text style={styles.textocomprovante}>Comprovante</Text>
            </View>

            <View style={styles.divinfos}>
                <View style={styles.divpagamento}>
                    <Ionicons name='cash-outline' size={18} color='green'/>
                    <Text style={styles.textopagamento}>Pago: 22/08/2023</Text>
                </View>

                <View style={styles.divvencimento}>
                    <Ionicons name='time-outline' size={18} color='goldenrod'/>
                    <Text style={styles.textovencimento}>Venc.: 29/08/2023</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 80,
        borderColor: '#F7770D',
        borderRadius: 10,
        alignSelf: 'center',
        borderWidth: 1,
        marginBottom: 8,
        display: "flex",
        flexDirection: "row",
        backgroundColor: 'white',
    },

    divanexo: {
        height: 78,
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
    },

    textocomprovante:{
        fontSize: 19,
        fontWeight: "bold",
        position: "relative",
    },

    divinfos: {
        display: "flex",
        flexDirection: "column",
        width: "50%",
        height: 78
    },

    divpagamento:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 39
    },

    textopagamento:{
        fontSize: 14,
    },

    divvencimento:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 39,
    },

    textovencimento: {
        fontSize: 14
    }
})
