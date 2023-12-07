import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from ".//VizualizarComprovants.modules";
import CardPagamento from "../../Componentes/CardPagamento";
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat"
import * as ImagePicker from 'expo-image-picker';
import { Image } from "react-native";
import { Token, UserData } from "../../services/Contexts/Contexts";
import axios from "axios";
import ApiCliente from "../../services/Api/ApiCiente";
import NetInfo from '@react-native-community/netinfo';
import SemWifi from "../../Componentes/SemWifi";
import showToast from "../../services/Toast/Toast";
import ImageZoom from "react-native-image-pan-zoom";

const VizualizarComprovante = ({ route }) => {

    const navigation = useNavigation();

    const { comprovante } = route.params;

    console.log(comprovante);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Ionicons name="chevron-back-outline" size={30} color={"white"} />
            </TouchableOpacity>
            <View>
                <ImageZoom cropWidth={1000}
                    cropHeight={800}
                    imageWidth={350}
                    imageHeight={700}
                    minScale={1}
                    doubleClickInterval={700}
                    style={{
                        borderRadius: 20,
                        alignSelf: "center", justifyContent: "center", alignItems: "center",
                    }}
                >
                    <Image style={styles.imagem}
                        source={{ uri: comprovante }} />
                </ImageZoom>
            </View>
        </View>
    )
}

export default VizualizarComprovante;