import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import styles from "./CadastroTela1.modules";
import BotaoGeral from "../../Componentes/BotaoGeral";

export default function CadastroTela1() {

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular,
        Montserrat_600SemiBold
    });

    if (!fonteLoaded) {
        return null;
    }

    return(
        <View style={styles.main}>
            <View style={styles.caixaheader}>
                <View style={styles.divseta}>
                    <Ionicons style={styles.seta} name={"chevron-back-outline"} size={40} color="#dbdbdb" />
                </View>

                <View style={styles.divimagem}>
                    <Image style={styles.logo} source={require("../../../assets/Logo.png")} />
                </View>

                <View style={styles.divregua}>
                    <Text></Text>
                </View>

            </View>

            <View style={styles.divtextos}>
                <Text style={styles.textosuperior}>Quem é você?</Text>
                <Text style={styles.textoinferior}>Selecione uma das opções abaixo:</Text>
            </View>

            <View style={styles.reguaopcoes}>
                <View style={styles.caixaopcao}>
                    <Image style={styles.imagem} source={require("../../../assets/volante.png")}/>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textobotao}>Motorista</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.caixaopcao}>
                    <Image style={styles.imagem} source={require("../../../assets/mamae.png")}/>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textobotao}>Responsável</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <BotaoGeral texto={"Prosseguir"} icone={"chevron-forward-outline"}/>

        </View>
    )

}