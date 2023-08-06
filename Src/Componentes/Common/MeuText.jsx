import React from 'react';
import { View, TextInput, Image } from "react-native";
import { StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function MeuText({ nomePlaceholder, icon, valorInput, mudou }) {

    return (
        <View style={styles.inpute}>

         <Ionicons name={icon} size={24} color="#b1aeae" />

            <TextInput
            placeholder={nomePlaceholder}
            style={styles.espacamento}
            value={valorInput}
            onChangeText={mudou}>
            </TextInput>

        </View>
    )
}

const styles = StyleSheet.create(
    {
        inpute: {
            borderRadius: 10,
            width: 273,
            height: 45,
            top: 30,
            backgroundColor: '#C4C4C433',
            marginBottom: 15,
            paddingLeft: 10,
            alignItems: 'center',
            textAlign: 'center',
            flexDirection: 'row',
            alignSelf: 'center'
            

        },

        espacamento:{
            marginLeft: 13, //Espaço entre a imagem e o placeholder
            width: 220,
        }
    }
)