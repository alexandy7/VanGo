import { ScrollView, StyleSheet, Text, View, Image, navigation } from "react-native";
import { useContext, useEffect, useState } from "react";
import styles from "./Chat.modules";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import BarraDePesquisaChat from "../../Componentes/BarraDePesquisaChat";
import CardChat from "../../Componentes/CardChat";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"

export default function Chat() {

    const navigation = useNavigation();

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
    });

    if (!fonteLoaded) {
        return null;
    }

    return(
        <ScrollView style={styles.scroll}>
            <View style={styles.header}>
                <View style={styles.divesquerda}>
                    <TouchableOpacity onPress={() => {navigation.goBack()}}>
                        <Ionicons name="chevron-back-outline" size={30} color={"white"}/>
                    </TouchableOpacity>
                </View>  
                
                {/* Foram criadas duas views separadas que formam o desenho de apenas uma,
                o elemento do topo da página não se enquadra na lógica das flexbox */}
                <View style={styles.divmeio}>
                    <Text style={styles.titulo}>Mensagem</Text>
                </View>      

                <View style={styles.divdireita}>

                </View>

            </View>

            <View style={styles.alinhabarra}>
                <BarraDePesquisaChat placeholder={"Exemplo: Jonathan Joestar"}/>
            </View>

            <CardChat foto={require("../../../assets/fazueli.jpg")} nome={"João Lino"} hora={"20:38"} ultmensagem={"Já enviei o pagamento"} QuantidadeMensagem={8}/>
            <CardChat foto={require("../../../assets/Ana.jpeg")} nome={"Ana Clara "} hora={"12:00"} ultmensagem={"Você: Certo, te encontro..."} QuantidadeMensagem={1}/>
            <CardChat foto={require("../../../assets/UserPhoto.png")} nome={"Gabiela Rodrigues"} hora={"01:00"} ultmensagem={"Misericórdia"} QuantidadeMensagem={2}/>
                
        </ScrollView>
    )

}
