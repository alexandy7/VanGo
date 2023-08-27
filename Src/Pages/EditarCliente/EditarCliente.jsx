import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import InputEdicao from "../../Componentes/InputEdicao";
import styles from "./EditarCliente.modules";

export default function EditarCliente() {

    const navigation = useNavigation();

    const irPerfil = () => {
        navigation.navigate('TabBarScreen')
    }

    return(
        <View style={styles.main}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.seta} onPress={irPerfil}>
                    <Ionicons name="chevron-back-outline" size={30}/>
                 </TouchableOpacity>

                <Text style={styles.titulo}>Editar Perfil</Text>
            </View>

            <Text style={styles.tituloform}>Nome do Aluno</Text>
            <InputEdicao icone={"body"} dado={"Ex: Aline Silveira"}/>

            <Text style={styles.tituloform}>Nome do Responsável</Text>
            <InputEdicao icone={"person"} dado={"Ex: Marcelo de Oliveira"}/>

            <Text style={styles.tituloform}>Endereço</Text>
            <InputEdicao icone={"home"} dado={"Ex: Rua prata, 220, Vila Menck - Osasco"}/>

            <Text style={styles.tituloform}>Enredeço de contingência</Text>
            <InputEdicao icone={"business"} dado={"Ex: Rua bronze, 122, Centro - Lapa"}/>

            <Text style={styles.tituloform}>Escola</Text>
            <InputEdicao icone={"book"} dado={"Ex: Etec Ermelinda Giannini Teixeira"}/>

            <Text style={styles.tituloform}>Horário</Text>
            <InputEdicao icone={"time"} dado={"Ex: 08:00 - 12:00"}/>

            <TouchableOpacity>
                <View style={styles.botao}>
                    <Text style={styles.texto}>Salvar Alterações</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )

}