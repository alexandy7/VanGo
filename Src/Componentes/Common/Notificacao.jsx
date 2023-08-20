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
            
            <View style={styles.alinhanome}>
                <View style={styles.divnomedouser}>
                    <Text style={styles.nomedouser}>{nomeuser}</Text>
                </View>

                <View style={styles.divinformacao}>
                    <Text style={styles.informacao}>{info}</Text>
                </View>
            </View>

            <View style={styles.alinhahora}>
                <View style={styles.divhorario}>
                    <Text style={styles.horario}>{hora}</Text>
                </View>

                <View style={styles.divicon}>
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

    alinhanome: {
        height: 79,
        width: "55%"
    },



    divinformacao: {
       


    },

    nomedouser:{
        fontSize: 20,
        position: "relative",
        marginLeft: "10%",
        marginTop: "1%"
    },

    informacao: {
        fontSize: 15,
        position: "relative",
        marginLeft: "10%",
        marginBottom: "1%"
    },

    alinhahora:{
        display: "flex",
        flexDirection: "column",
        height: 79,
        width: "20%",
        alignItems: "center"
    },

    divhorario:{
        position: "relative",
        height: "50%",
    },

    horario: {
        fontSize: 16,
        color: "#F7770D",
        display: "flex",
        position: "relative",
        marginTop: "14%"
    },

    divicon:{
        position: "relative",
        height: "50%",
    },

    icon:{
        position: "relative",
        marginTop: "5%"
    }

})