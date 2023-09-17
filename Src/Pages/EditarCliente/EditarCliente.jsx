import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import InputEdicao from "../../Componentes/InputEdicao";
import styles from "./EditarCliente.modules";
import { useFonts, Montserrat_500Medium, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"

export default function EditarCliente() {

    const [fonteLoaded] = useFonts ({
        Montserrat_500Medium,
        Montserrat_600SemiBold
    });

    if (!fonteLoaded) {
        return null;
    }

    const navigation = useNavigation();

    const irPerfil = () => {
        navigation.navigate('TabBarScreen')
    }

    return(
        <View style={styles.main}>
            <View style={styles.header}>
                <View style={styles.divesquerda}>
                    <TouchableOpacity style={styles.seta} onPress={()=>{navigation.goBack()}}>
                        <Ionicons name="chevron-back-outline" size={30}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.divmeio}>
                    <Text style={styles.titulo}>Editar Perfil</Text>
                </View>

                <View style={styles.divdireita}>

                </View>

            </View>

            <Text style={styles.tituloform}>Nome do Aluno</Text>
            <InputEdicao icone={"body-outline"} dado={"Ex: Aline Silveira"}/>

            <Text style={styles.tituloform}>Nome do Responsável</Text>
            <InputEdicao icone={"person-outline"} dado={"Ex: Marcelo de Oliveira"}/>

            <Text style={styles.tituloform}>Endereço</Text>
            <InputEdicao icone={"home-outline"} dado={"Ex: Rua prata, 220, Vila Menck - Osasco"}/>

            <Text style={styles.tituloform}>Enredeço de contingência</Text>
            <InputEdicao icone={"business-outline"} dado={"Ex: Rua bronze, 122, Centro - Lapa"}/>

            <Text style={styles.tituloform}>Escola</Text>
            <InputEdicao icone={"book-outline"} dado={"Ex: Etec Ermelinda Giannini Teixeira"}/>

            <Text style={styles.tituloform}>Horário</Text>
            <InputEdicao icone={"time-outline"} dado={"Ex: 08:00 - 12:00"}/>

            <TouchableOpacity>
                <View style={styles.botao}>
                    <Text style={styles.texto}>Salvar Alterações</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )

}