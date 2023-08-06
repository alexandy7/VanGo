import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

export default function Perfil({ fotoUser, nomeUser, evento}) {
    return (
        <View style={styles.container}>
            
            <View style={styles.fotonome}>
                <TouchableOpacity style={styles.config} onPress={evento}>
                    <Image source={require('../../../assets/config.png')} />
                </TouchableOpacity>
                <Image source={fotoUser} style={styles.imagem}/>
                <Text style={styles.nome}>{nomeUser}</Text>
            </View>

            </View>
    );

}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            
        },

        fotonome: {
            height: 270,
            backgroundColor: "#E46C08",
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50,
            justifyContent: 'center',

        },

        imagem: {
            alignSelf: 'center',
        },

       

        nome: {
            color: 'white',
            alignSelf: 'center',
            fontSize: 20,
            marginTop: 5
        },

        config:{
            position: 'absolute',
            right: 15,
            top: 15,

        }

      


    }
)