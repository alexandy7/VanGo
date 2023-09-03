import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function CardPagamento({item, evento}) 
{

    return(
        <View style={[styles.container, Platform.OS === 'android' && styles.shadow]}>
            <View style={styles.divimagem}>
                <Image source={require('../../assets/gato.jpg')} style={styles.imagem}/>
            </View>

            <View style={styles.containertexto}>
        
                <View style={styles.divtextosuperior}>
                    <Text style={styles.nome}>Matriona</Text>
                    <Text style={styles.fatura}>R$130,00</Text>
                    <TouchableOpacity style={styles.seta} onPress={evento}>
                        <Ionicons name="chevron-forward-outline" size={27} color='#F7770D'/>
                    </TouchableOpacity>
                </View>
            
                <View style={styles.divtextoinferior}>

                    <View style={styles.alinhatexto}>
                        <Ionicons style={styles.warning} name="warning-outline" size={20} color='red'/>
                        <Text style={styles.situacao}>Atraso</Text>
                    </View>

                    <Text style={styles.vencimento}>Venc.: 10/04/2023</Text>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 80,
        borderColor: 'grey',
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: 35,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white', // Adicione um fundo branco
        
      },
      
    shadow: {
        elevation: 15, // Esta propriedade adiciona sombra no Android
    },

    divimagem: {
        width: "25%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    imagem: {
        height: "80%",
        width: "80%",
        borderRadius: 20,
    },

    containertexto: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "75%",
    },
    
    divtextosuperior: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 39,
        position: "relative",
        justifyContent: "space-evenly",
        top: 5
    },

    nome: {
        position:"relative",
        fontSize: 19,
    },

    fatura: {
        position:"relative",
        fontSize: 19,
        color: "red"
    },

    seta: {
        position:"relative",
    },

    divtextoinferior: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        height: 39,
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
        right: "3%"
    },

    vencimento: {
        position: "relative",
        fontSize: 15,   
        right: "0%"
    }
})