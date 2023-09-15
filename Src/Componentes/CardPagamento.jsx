import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function CardPagamento({imagem, nome, fatura,icon, iconcolor, status, vencimento, evento}) 
{

    return(
        <View style={[styles.container, Platform.OS === 'android' && styles.shadow]}>
            <View style={styles.divimagem}>
                <Image source={imagem} style={styles.imagem}/>
            </View>

            <View style={styles.containertexto}>
        
                <View style={styles.divsuperior}>
                    {/* Essas réguas servem para deixar os conteúdos fixos no lugar */}
                    <View style={styles.reguanome}> 
                        <Text style={styles.nome}>{nome}</Text>
                    </View>

                    <View style={styles.reguafatura}>
                        <Text style={styles.fatura}>{"R$" + fatura}</Text>
                    </View>

                    <View style={styles.reguaicone}>
                        <TouchableOpacity style={styles.seta} onPress={evento}>
                            <Ionicons name="chevron-forward-outline" size={27} color='#F7770D'/>
                        </TouchableOpacity>
                    </View>      
                </View>
            
                <View style={styles.divinferior}>

                    <View style={styles.reguastatus}>
                        <Ionicons style={styles.warning} name={icon} size={20} color={"green"}/>
                        <Text style={styles.situacao}>{status}</Text>
                    </View>

                    <View style={styles.reguavencimento}>
                        <Text style={styles.vencimento}>{"Venc.:" + vencimento}</Text>
                    </View>

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
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white', // Adicione um fundo branco
      },
      
    shadow: {
        elevation: 10, // Esta propriedade adiciona sombra no Android
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
        width: "75%",
    },
    
    divsuperior: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 40,
        position: "relative",
    },

    reguanome: {
        width: "45%",
        height: "100%",
        display	: "flex",
        justifyContent: "center"
    },

    reguafatura: {
        width: "35%",
        height: "100%",
        display	: "flex",
        justifyContent: "center"
    },

    reguaicone: {
        width: "20%",
        height: "100%",
        display	: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    nome: {
        fontSize: 22,
        marginLeft: "5%"
    },

    fatura: {
        fontSize: 18,
        color: "black"
    },

    seta: {
        marginTop: 2
    },

    divinferior: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: 40,
        position: "relative",
    },

    reguastatus:{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "40%",
        alignItems: "center"
    },

    warning: {
        position: "relative",
        marginLeft: "5%",
        marginBottom: 5
    },

    situacao: {
        position: "relative",
        fontSize: 15,
        marginBottom: 5
    },

    reguavencimento: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "60%",
        alignItems: "center",
        justifyContent: "flex-end",
    },

    vencimento: {
        position: "relative",
        fontSize: 15,
        marginRight: "15%",
        marginBottom: 5
    }
})