import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import styles from "./CadastrarClienteTurma.modules";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat"
import InputEdicao from "../../Componentes/InputEdicao";
import BotaoGeral from "../../Componentes/BotaoGeral"

export default function CadastrarClienteTurma({foto, nome}){

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular
    });

    if (!fonteLoaded) {
        return null;
    }

    return(
        <ScrollView style={styles.main}>
            <View style={styles.header}>
                <View style={styles.divesquerda}>
                    <TouchableOpacity style={styles.seta} onPress={() => { navigation.goBack() }}>
                        <Ionicons name="chevron-back-outline" size={35} color={"gray"} />
                    </TouchableOpacity>
                </View>

                <View style={styles.divmeio}>
                    <Text style={styles.titulo}>Segunda Etapa</Text>
                </View>

                <View style={styles.divdireita}>
                    <Text style={styles.numerostitulo}>01/10</Text>
                </View>
            </View>

            <View style={styles.divtextosup}>
                <Text style={styles.textosup1}>Cadastre seu cliente aqui</Text>
                <Text style={styles.textosup2}>Adicione suas informações abaixo:</Text>
            </View>

            <TouchableOpacity style={styles.containerfoto}>
                <Image style={styles.foto} source={require("../../../assets/Ana.jpeg")}/>
            </TouchableOpacity>
            
            <Text style={styles.nomecliente}>{"A pessoa menos provável do mundo"}</Text>

            <Text style={styles.tituloform}>Valor da mensalidade</Text>
                <InputEdicao dado={"Ex: R$200,00"}/>
            
            <Text style={styles.tituloform}>Vencimento da mensalidade</Text>
                <InputEdicao dado={"Ex: 10/12/2023"}/>
            
            <Text style={styles.tituloform}>Utilização dos serviços</Text>
                <InputEdicao dado={"Ex: Ida e volta"}/>

            <BotaoGeral texto={"Próximo"} icone={"chevron-forward-outline"}/>

        </ScrollView>
    )

}