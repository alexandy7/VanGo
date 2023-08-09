import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function CardPagamento({item}) 
{

    return(
        <View style={styles.container}>
            <View style={styles.divimagem}>
                <Image source={require('../../../assets/gato.jpg')} style={styles.divimagem}/>
            </View>

            <View style={styles.containertexto}>
        
                <View style={styles.divtextosuperior}>
                    <Text style={styles.nome}>Matriona</Text>
                    <Text style={styles.fatura}>R$130,00</Text>
                    <TouchableOpacity style={styles.seta}>
                        <Ionicons name="chevron-forward-outline" size={27} color='#F7770D'/>
                    </TouchableOpacity>
                </View>
            
                <View style={styles.divtextoinferior}>

                    <View style={styles.alinhatexto}>
                        <Ionicons style={styles.warning} name="warning-outline" size={20} color='red'/>
                        <Text style={styles.situacao}>Atraso</Text>
                    </View>

                    <Text style={styles.vencimento}>Vencimento: 10/04/2023</Text>
                    
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 80,
        borderColor: 'grey',
        borderRadius: 20,
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        // shadowRadius: 10,
        marginBottom: 35,
        display: "flex",
        flexDirection: "row"
    },

    divimagem: {
        height: 79,
        width: 79,
        backgroundColor: "black",
        position: "relative",
        borderRadius: 20,
    },

    containertexto: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
    },
    
    divtextosuperior: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        height: 40,
        position: "relative",
        top: 5
    },

    nome: {
        position:"relative",
        fontSize: 20,
        left: "30%"
    },

    fatura: {
        position:"relative",
        left: "30%",
        fontSize: 20,
        color: "red"
    },

    seta: {
        position:"relative",
        left: "10%"
    },

    divtextoinferior: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        height: 40,
        position: "relative",
        top: 5
    },

    warning: {
        position: "relative",
    },

    situacao: {
        position: "relative",
        fontSize: 15
    },

    alinhatexto:{
        display: "flex",
        flexDirection: "row",
        left: "3%"
    },

    vencimento: {
        position: "relative",
        fontSize: 15,   
        right: "5%"
    }
})