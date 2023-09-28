import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import MeuText from './MeuText';

export default function InputPrompt({ visible, onConfirm, onCancel, change, valor }) {

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.container}>

                <View style={styles.modal}>

                    <Text style={{alignSelf: "center", fontSize: 16}}>Digite sua senha para confirmar</Text>
                    <MeuText nomePlaceholder={"Digite aqui"} mudou={change} valorInput={valor}/>

                    <View style={styles.viewBotao}>

                        <TouchableOpacity onPress={onCancel} style={styles.botao}>
                            <Text style={{color: "white", alignSelf: "center"}}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onConfirm} style={styles.botao}>
                            <Text style={{color: "white", alignSelf: "center"}}>Confirmar</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modal: {
        backgroundColor: 'white',
        padding: 30,
        paddingBottom: 20,
        borderRadius: 10,
        elevation: 93,
    },

    viewBotao: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: "15%"
    },

    botao:{
        backgroundColor: "#F7770D",
        padding: 10,
        borderRadius: 10,
        width: "40%"
    }
})

