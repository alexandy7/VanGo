import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function Perfil({ fotoUser, nomeUser, evento }) {
    return (
        <View style={styles.geral}>

            <View style={styles.config}>
                <TouchableOpacity onPress={evento}>
                   <Ionicons name="settings-sharp" color={'white'} size={35}/>
                </TouchableOpacity>
            </View>

            <View style={styles.fotoNome}>
                <Image source={fotoUser} style={styles.imagem} />
                <Text style={styles.nome}>{nomeUser}</Text>
            </View>

        </View>
    );

}

const styles = StyleSheet.create(
    {
        geral: {
            backgroundColor: "#E46C08",
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
            height: 300,

            blurView: 10

        },

        config: {
            alignSelf: "flex-end",
            right: 15,
            top: 15,
        },

        fotoNome:{
            alignSelf: "center",
            top: 20
        },

        imagem:{
            height: 120,
            width: 130,
            alignSelf: "center",
            borderRadius: 25,
            
            
        },

        nome:{
            color: "white",
            fontSize: 25,
            alignSelf: "center"
        }
    }
)