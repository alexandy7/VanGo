import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./AceitarPagamento.modules";
import CardPagamento from "../../Componentes/CardPagamento";
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat"
import * as ImagePicker from 'expo-image-picker';
import { Image } from "react-native";

export default function AceitarPagamento() {

    const navigation = useNavigation();

    const [base64, setBase64] = useState(null);
    const [foto, setFoto] = useState(null);
    const [exibirFoto, setExibirFoto] = useState(false)

    const hoje = new Date();

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular
    });

    if (!fonteLoaded) {
        return null;
    }

    async function selecionarImagem() {
        try {

            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [5.5, 10],
                allowsEditing: true,
                base64: true
            });

            if (result.canceled) {
                return;
            }
            setBase64(result.assets[0].base64);
            setFoto(result.assets[0].uri);
            setExibirFoto(true);

        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <ScrollView style={styles.principal}>
            <View style={styles.header}>
                <View style={styles.divesquerda}>
                    <TouchableOpacity style={styles.seta} onPress={() => { navigation.goBack() }}>
                        <Ionicons name="chevron-back-outline" size={30} />
                    </TouchableOpacity>
                </View>

                <View style={styles.divmeio}>
                    <Text style={styles.titulo}>Solicitação</Text>
                </View>

                <View style={styles.divdireita}>

                </View>
            </View>

            <CardPagamento imagem={require('../../../assets/gato.jpg')} nome={"Matriona"} fatura={"80,00"} icon={"warning-outline"} status={"Em atraso"} vencimento={"10/12/2023"} />

            <TouchableOpacity style={styles.divanexo}>

            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoaceitar}>
                <Text style={styles.textobotaoaceitar}>Aceitar Pagamento</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaorecusar}>
                <Text style={styles.textobotaorecusar}>Recusar Pagamento</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}