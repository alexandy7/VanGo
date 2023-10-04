import React, {} from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./AnexarPagamentos.modules";
import CardPagamento from "../../Componentes/CardPagamento";
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat"

export default function AnexarPagamentos() {

    const navigation = useNavigation();
    
    const hoje = new Date();

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular
    });

    if (!fonteLoaded) {
        return null;
    }

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

            <TouchableOpacity style={styles.divanexo} onPress={()=>{console.log('aaa')}}>
                <Text style={styles.textodestacado}>Clique aqui</Text>
                <Text style={styles.textoanexo}> para anexar o</Text>
                <Text style={styles.textoanexo}>pagamento. (PNG, JPG)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoanexar}>
                <Text style={styles.textoanexar}>Enviar Anexo</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}