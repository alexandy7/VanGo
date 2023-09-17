import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./PagamentosMotorista.modules";
import CardPagamento from "../../Componentes/CardPagamento";
import BarraDePesquisa from "../../Componentes/BarraDePesquisa";
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Montserrat_500Medium} from "@expo-google-fonts/montserrat"

export default function PagamentosMotorista() {

    const [fonteLoaded] = useFonts ({
        Montserrat_500Medium
    });

    if (!fonteLoaded) {
        return null;
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
                    <Text style={styles.titulo}>Pagamentos</Text>
                </View>

                <View style={styles.divdireita}>

                </View>

                <View style={styles.divbarra}>
                    <BarraDePesquisa placeholder={"Exemplo: Ana Clara"}/>
                </View>
            </View>

                <View style={styles.alinhabotoes}>

                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textobotao}>Todos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textobotao}>Em Atraso</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textobotao}>Pagos</Text>
                    </TouchableOpacity>

                </View>

            <ScrollView style={styles.scroll}>
                
                <CardPagamento imagem={require('../../../assets/gato.jpg')} nome={"Matriona"} fatura={"80,00"} icon={"warning-outline"} status={"Em atraso"} vencimento={"10/12/2023"}/>
                <CardPagamento imagem={require('../../../assets/Ana.jpeg')} nome={"Ana Clara"} fatura={"150,00"} icon={"checkmark-outline"} status={"Pago"} vencimento={"22/11/2023"}/>
                <CardPagamento imagem={require('../../../assets/fazueli.jpg')} nome={"Celebrexon"} fatura={"80,00"} icon={"warning-outline"} status={"Amogus"} vencimento={"32/13/2026"}/>
                <CardPagamento imagem={require('../../../assets/fazueli.jpg')} nome={"Celebrexon"} fatura={"80,00"} icon={"warning-outline"} status={"Amogus"} vencimento={"32/13/2026"}/>
                <CardPagamento imagem={require('../../../assets/fazueli.jpg')} nome={"Celebrexon"} fatura={"80,00"} icon={"warning-outline"} status={"Amogus"} vencimento={"32/13/2026"}/>
                <CardPagamento imagem={require('../../../assets/fazueli.jpg')} nome={"Celebrexon"} fatura={"80,00"} icon={"warning-outline"} status={"Amogus"} vencimento={"32/13/2026"}/>
                <CardPagamento imagem={require('../../../assets/fazueli.jpg')} nome={"Celebrexon"} fatura={"80,00"} icon={"warning-outline"} status={"Amogus"} vencimento={"32/13/2026"}/>
                <CardPagamento imagem={require('../../../assets/fazueli.jpg')} nome={"Celebrexon"} fatura={"80,00"} icon={"warning-outline"} status={"Amogus"} vencimento={"32/13/2026"}/>
                <CardPagamento imagem={require('../../../assets/fazueli.jpg')} nome={"Celebrexon"} fatura={"80,00"} icon={"warning-outline"} status={"Amogus"} vencimento={"32/13/2026"}/>
                <CardPagamento imagem={require('../../../assets/fazueli.jpg')} nome={"Celebrexon"} fatura={"80,00"} icon={"warning-outline"} status={"Amogus"} vencimento={"32/13/2026"}/>
                <CardPagamento imagem={require('../../../assets/fazueli.jpg')} nome={"Celebrexon"} fatura={"80,00"} icon={"warning-outline"} status={"Amogus"} vencimento={"32/13/2026"}/>
                <CardPagamento imagem={require('../../../assets/fazueli.jpg')} nome={"Celebrexon"} fatura={"80,00"} icon={"warning-outline"} status={"Amogus"} vencimento={"32/13/2026"}/>

            </ScrollView>
        </View>
    )

}