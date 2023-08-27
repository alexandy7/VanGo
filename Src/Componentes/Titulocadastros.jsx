import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default function TituloCadastro({textoh1, textoh2}) {
    return (
        <View>
            <Image source={require('../../assets/Logo.png')} style={styles.imagem} />

            <Text style={styles.titulo}>{textoh1}</Text>
            <Text style={styles.msg}>{textoh2}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    msg: {
        textAlign: 'center',
        fontSize: 13,
        color: 'rgb(145, 138, 138)'
    },

    titulo: {
        textAlign: 'center',
        fontSize: 25,
    },
    
    imagem: {
        top: 15,
        alignSelf: 'center',
        width: 130,
        height: 100,
    }
})
