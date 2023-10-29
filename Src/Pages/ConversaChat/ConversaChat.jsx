import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_300Light } from "@expo-google-fonts/montserrat"
import styles from "./ConversaChat.modules";
import BalaoChatEu from "../../Componentes/BalaoChatEu";
import BalaoChatVoce from "../../Componentes/BalaoChatVoce";
import { TextInput } from "react-native";

export default function ConversaChat({foto, nome, escola}) {

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_300Light
    });

    if (!fonteLoaded) {
        return null;
    }

    return(
        <View style={styles.main}>
            <View style={styles.header}>
                <View style={styles.divsetaheader}>
                    <Ionicons name={"chevron-back-outline"} size={40} color="white" />
                </View>

                <View style={styles.divimagemheader}>
                    <Image style={styles.imagemheader} source={require("../../../assets/Ana.jpeg")}/>
                </View>

                <View style={styles.divtextoheader}>
                    <Text style={styles.texto1header}>{"Magnolia do corsa"}</Text>
                    <Text style={styles.texto2header}>{"E.e cu rosa"}</Text>
                </View>
            </View>

            <ScrollView style={styles.rolagemchat}>
                <BalaoChatEu mensagem={"Salv"} hora={"12:00"}/>
                <BalaoChatEu mensagem={"Já fez o trabalho do aurelion?"} hora={"12:01"}/>
                <BalaoChatEu mensagem={"Preciso de uma moral ai kkkkkkkkkkkkkkk...J"} hora={"12:01"}/>
                <BalaoChatVoce mensagem={"Te fude pra lá vai"} hora={"12:04"}/>
                <BalaoChatVoce mensagem={"Seu preguiçoso de merda"} hora={"12:05"}/>
                <BalaoChatEu mensagem={"Ah qualé, eu te ajudei no último trabalho o sua bixa"} hora={"12:06"}/>
                <BalaoChatVoce mensagem={"Eu te paguei pra você fazer ô mongol"} hora={"12:10"}/>
                <BalaoChatVoce mensagem={"Até pq é a unica forma de você mexer um dedo que seja pra fazer algo que n seja coçar o rabo"} hora={"12:10"}/>
                <BalaoChatVoce mensagem={"Te vira"} hora={"12:10"}/>
                <BalaoChatEu mensagem={"Tomá no teu cu então"} hora={"12:12"}/>
                <BalaoChatEu mensagem={"Os de vdd eu sei quem são..."} hora={"12:13"}/>
                <BalaoChatVoce mensagem={"Ai que dramático...."} hora={"12:20"}/>
                <BalaoChatVoce mensagem={"O tempo que vc ta ai falando merda, vc podia ter começado já"} hora={"12:21"}/>
                <BalaoChatVoce mensagem={"Ta perdendo tempo a toa"} hora={"12:22"}/>
                <BalaoChatEu mensagem={"O Naruto pode ser um pouco duro as vezes, talvez você não saiba disso, mas o Naruto também cresceu sem pai. Na verdade ele nunca conheceu nenhum de seus pais, e nunca teve nenhum amigo em nossa aldeia. Mesmo assim eu nunca vi ele chorar, ficar zangado ou se dar por vencido, ele está sempre disposto a melhorar, ele quer ser respeitado, é o sonho dele e o Naruto daria a vida por isso sem hesitar. Meu palpite é que ele se cansou de chorar e decidiu fazer alguma coisa a respeito!"} hora={"12:50"}/>
            </ScrollView>

            <View style={styles.divcaixatexto}>
                <View style={styles.caixademensagem}>
                    <View style={styles.divreguainput}>
                        <TextInput style={styles.input} placeholder={"Digite aqui..."} placeholderTextColor={"#d1d1d1"} ></TextInput>
                    </View>
                    <TouchableOpacity style={styles.divreguaicon}>
                        <Ionicons name={"send-sharp"} size={25} color="#d1d1d1"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}