import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'
export default function PincelEditar({evento}){

    return(
        <View style={styles.posicao}>
            <TouchableOpacity onPress={evento}>
            <Ionicons name='brush' size={20} color="#F7770D" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        posicao: {
            alignSelf: 'flex-end',
            top: 23,
            right: 15,
         },

         botao: {
            fontSize: 30
         }
    }
)

