import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function Notificacao({fotouser, nomeuser, info, hora, icone}) 
{

    return(
        <View style={styles.container}>
            <View style={styles.divimagem}>
                <Image source={fotouser} style={styles.imagem}></Image>
            </View>
            
            <View style={styles.alinha}>
                <View style={styles.divsuperior}>
                    <Text style={styles.nomedouser}>{nomeuser}</Text>
                    <Text style={styles.horario}>{hora}</Text>
                </View>

                <View style={styles.divinferior}>
                    <Text style={styles.informacao}>{info}</Text>
                    <Ionicons style={styles.icon} name={icone} size={25} color='#F7770D'/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 80,
        borderColor: '#F7770D',
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: 15,
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        },
    
        divimagem: {
            height: 79,
            width: "25%",
            backgroundColor: "black",
            position: "relative",
            borderRadius: 20,
        },
    
        imagem: {
            height: "100%",
            width: "100%",
            borderRadius: 20
        },
    
        alinha: {
            height: 79,
            width: "75%"
        },
    
        divsuperior: {
            display: "flex",
            flexDirection: "row",
            height: "50%",
            alignItems: "center",
            justifyContent: "space-between"
        },
    
        divinferior: {
            display: "flex",
            flexDirection: "row",
            height: "50%",
            alignItems: "center",
            justifyContent: "space-between"
        },
    
        nomedouser:{
            fontSize: 20,
            position: "relative",
            marginLeft: "5%",
            marginTop: "3%"
        },
    
        informacao: {
            fontSize: 15,
            position: "relative",
            marginLeft: "5%",
            marginBottom: "3%"
        },
    
        horario: {
            fontSize: 16,
            color: "#F7770D",
            display: "flex",
            position: "relative",
            marginRight: "5%",
            marginTop: "3%"
        },
    
        icon:{
            marginRight: "5%"
        }
    })