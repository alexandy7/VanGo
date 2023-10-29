import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import MeuText from './MeuText';
import * as Animatable from 'react-native-animatable';
import { GuardarToken, RemoverToken, Token, UserData } from '../services/Contexts/Contexts';
import ApiCliente from '../services/Api/ApiCiente';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';
export default function InputPrompt({ visible, onCancel, mudouu, senha, erro, evento, clicou }) {

    const animatableRef = useRef(null); // Referência para a animação

    const handleAnimation = () => {
        if (animatableRef.current) {
            animatableRef.current.animate('shake', 500); // Inicia a animação 'shake' com duração de 0.5 segundos
        }

    }
    useEffect(() => {
        if (erro) {
            handleAnimation();
        };
    }, [erro]);

    return (
        <Modal visible={visible} transparent animationType="slide">
            <Animatable.View style={styles.container} ref={animatableRef}>

                <View style={[styles.modal, { borderWidth: erro ? 1 : 0, borderColor: "grey" }]}>

                    <Text style={{ alignSelf: "center", fontSize: 16 }}>Digite sua senha para confirmar:</Text>
                    <MeuText
                        nomePlaceholder={"Digite aqui"}
                        mudou={mudouu}
                        valorInput={senha}
                    />
                    {erro && <View><Text style={{ color: "red" }}>Senha incorreta</Text></View>}

                    <View style={styles.viewBotao}>

                        <TouchableOpacity onPress={onCancel} style={styles.botao}>
                            <Text style={{ color: "white", alignSelf: "center" }}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={evento} style={styles.botao}>
                            {
                                clicou ? (
                                    <ActivityIndicator color={'white'}/>
                                )
                                    :
                                    (
                                        <Text style={{ color: "white", alignSelf: "center" }}>Confirmar</Text>
                                    )
                            }
                        </TouchableOpacity>

                    </View>

                </View>

            </Animatable.View>
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

    botao: {
        backgroundColor: "#F7770D",
        padding: 10,
        borderRadius: 10,
        width: "40%"
    }
})

