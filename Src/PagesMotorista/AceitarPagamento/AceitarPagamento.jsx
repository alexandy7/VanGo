import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, ActivityIndicator } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./AceitarPagamento.modules";
import CardPagamento from "../../Componentes/CardPagamento";
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat"
import * as ImagePicker from 'expo-image-picker';
import ImageZoom from 'react-native-image-pan-zoom';
import { Token } from "../../services/Contexts/Contexts";
import ApiMotorista from "../../services/Api/ApiMotorista";
import axios from "axios";
import ApiCliente from "../../services/Api/ApiCiente";
import FormatadorData from "../../services/Formatadores/FormatadorData/FormatadorData";

const AceitarPagamento = ({ route }) => {

    const navigation = useNavigation();

    const { imagem, nome, valor, color, vencimento, icon, status, comprovante, id_cliente, id_mensalidade, id_motorista, dataDecorrente } = route.params;

    const [clickAceitar, setClickAceitar] = useState(false);
    const [clickRecusar, setClickRecusar] = useState(false);

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular
    });

    if (!fonteLoaded) {
        return null;
    };


    //Está recebendo um parametro para depois configurar para o motorista conseguir recusar
    async function ConfirmarPagamento(status) {

        setClickAceitar(true);
        try {

            const token = await Token();

            const data = {
                Vencimento_mensalidade: vencimento,
                Valor_mensalidade: valor,
                Id_mensalidade: id_mensalidade,
                Id_cliente: id_cliente,
                Id_motorista: id_motorista,
            };

            let response = await ApiMotorista.post("ConfirmarPagamento", data, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            });

            setClickAceitar(false);
            navigation.navigate('PagamentosMotorista')
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
                vencimento={FormatadorData(vencimento)}
                color={color}
                seta={false}
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
                        source={{ uri: comprovante }} />
                </ImageZoom>

            </View>

            {
                status === "pendente" ? (

                    <View>

                        {
                            clickAceitar ? (
                                <TouchableOpacity style={styles.botaoaceitar} onPress={() => { ConfirmarPagamento() }}>
                                    <Text style={styles.textobotaoaceitar}><ActivityIndicator color={"#F7770D"} /></Text>
                                </TouchableOpacity>
                            )
                                :
                                (
                                    <TouchableOpacity style={styles.botaoaceitar} onPress={() => { ConfirmarPagamento() }}>
                                        <Text style={styles.textobotaoaceitar}>Aceitar Pagamento</Text>
                                    </TouchableOpacity>
                                )
                        }

                        {
                            clickRecusar ? (
                                <TouchableOpacity style={styles.botaorecusar} onPress={() => { ConfirmarPagamento("recusado") }}>
                                    <Text style={styles.textobotaorecusar}><ActivityIndicator color={"#F7770D"} /></Text>
                                </TouchableOpacity>
                            )
                                :
                                (
                                    <TouchableOpacity style={styles.botaorecusar} onPress={() => { ConfirmarPagamento("recusado") }}>
                                        <Text style={styles.textobotaorecusar}>Recusar Pagamento</Text>
                                    </TouchableOpacity>
                                )
                        }
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