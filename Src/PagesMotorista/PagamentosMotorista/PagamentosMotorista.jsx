import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./PagamentosMotorista.modules";
import CardPagamento from "../../Componentes/CardPagamento";

export default function PagamentosMotorista() {

    return(
        <ScrollView style={styles.scroll}>
            <View style={styles.header}>

                <Text style={styles.titulo}>Pagamentos</Text>

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

            <CardPagamento imagem={require('../../../assets/gato.jpg')} nome={"Matriona"} fatura={"80,00"} icon={"warning-outline"} status={"Em atraso"} vencimento={"10/12/2023"}/>
            <CardPagamento imagem={require('../../../assets/Ana.jpeg')} nome={"Ana"} fatura={"150,00"} icon={"checkmark-outline"} status={"Pago"} vencimento={"22/11/2023"}/>
            <CardPagamento imagem={require('../../../assets/fazueli.jpg')} nome={"Celebrexon"} fatura={"80,00"} icon={"warning-outline"} status={"Amogus"} vencimento={"32/13/2026"}/>



        </ScrollView>
    )

}