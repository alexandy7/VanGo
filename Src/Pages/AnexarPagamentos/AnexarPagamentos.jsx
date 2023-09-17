import React, {} from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./AnexarPagamentos.modules";
import CardPagamento from "../../Componentes/CardPagamento";

export default function AnexarPagamentos() {

    const navigation = useNavigation();
    
    const hoje = new Date();

    return(
        <ScrollView style={styles.principal}>
            <View style={styles.header}>
                <View style={styles.divesquerda}>
                    <TouchableOpacity style={styles.seta} onPress={()=> {navigation.goBack()}}>
                        <Ionicons name="chevron-back-outline" size={30} />
                    </TouchableOpacity>
                </View>

                <View style={styles.divmeio}>
                    <Text style={styles.titulo}>Anexar Comprovante</Text>
                </View>

                <View style={styles.divdireita}>

                </View>
            </View>

            <CardPagamento imagem={require('../../../assets/gato.jpg')} nome={"Matriona"} fatura={"80,00"} icon={"warning-outline"} status={"Em atraso"} vencimento={"10/12/2023"}/>

            <View style={styles.divopcoes}>

                <View style={styles.divtexto}>
                    <Text style={styles.texto}>Selecione o tipo</Text>
                </View>

                <View style={styles.divbotoes}>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textobotao}>Comprovante</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textobotao}>Boleto</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.divanexo} onPress={()=>{console.log('aaa')}}>
                <Ionicons name="document-attach-outline" size={50} color='darkgray'/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoanexar}>
                <Text style={styles.textoanexar}>Enviar Anexo</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}