import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./AceitarPagamento.modules";
import CardPagamento from "../../Componentes/CardPagamento";
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat"
import * as ImagePicker from 'expo-image-picker';
import ImageZoom from 'react-native-image-pan-zoom';
import { Token } from "../../services/Contexts/Contexts";
import ApiMotorista from "../../services/Api/ApiMotorista";

const AceitarPagamento = ({ route }) => {

    const navigation = useNavigation();

    const { imagem, nome, valor, color, vencimento, icon, status, comprovante, id_cliente, id_mensalidade } = route.params;

    const [base64, setBase64] = useState(null);
    const [foto, setFoto] = useState(null);
    const [exibirFoto, setExibirFoto] = useState(false);
    const [escala, setEscala] = useState(1)
    const hoje = new Date();

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular
    });

    if (!fonteLoaded) {
        return null;
    }


    //Está recebendo um parametro para depois configurar para o motorista conseguir recusar
    async function ConfirmarPagamento(status) {

        try {

            const token = await Token();

            const data = {
                Id_cliente: id_cliente,
                Id_mensalidade: id_mensalidade,
                Vencimento_mensalidade: vencimento,
                Valor_mensalidade: valor,

            }

            let response = await ApiMotorista.post("ConfirmarPagamento", data, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            })
        }
        catch (error) {
            console.log(error);
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

            <CardPagamento
                imagem={{ uri: imagem }}
                nome={nome}
                valor={valor}
                icon={icon}
                status={status}
                vencimento={vencimento}
                color={color}
            />

            <View style={styles.divanexo}>

                <ImageZoom cropWidth={300}
                    cropHeight={350}
                    imageWidth={300}
                    imageHeight={350}
                    minScale={1}
                    doubleClickInterval={700}
                    style={{
                        borderRadius: 20,
                        alignSelf: "center", justifyContent: "center", alignItems: "center",
                    }}
                >
                    <Image style={styles.comprovante}
                        source={{ uri: 'https://sampahosting.com.br/blog/wp-content/uploads/2021/02/09-pix-inter-sampahosting.jpeg' }} />
                </ImageZoom>

            </View>

            {
                status !== "pago" ? (

                    <View>
                        <TouchableOpacity style={styles.botaoaceitar} onPress={() => { ConfirmarPagamento() }}>
                            <Text style={styles.textobotaoaceitar}>Aceitar Pagamento</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botaorecusar} onPress={() => { ConfirmarPagamento("recusado") }}>
                            <Text style={styles.textobotaorecusar}>Recusar Pagamento</Text>
                        </TouchableOpacity>
                    </View>
                )
               :
            (
            <View></View>
            )
            }
        </ScrollView>
    )
}

export default AceitarPagamento;