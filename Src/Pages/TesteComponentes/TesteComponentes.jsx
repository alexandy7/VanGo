import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import NotFound from "../../Componentes/NotFound";
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"
import { StyleSheet } from "react-native";
import SemWifi from "../../Componentes/SemWifi";
import TurmaVazia from "../../Componentes/TurmaVazia";
import NaoEncontrado from "../../Componentes/NaoEncontrado";
import ErroGeral from "../../Componentes/ErroGeral";
import SolicitacaoRecusada from "../../Componentes/SolicitacaoRecusada";
import SolicitacaoEnviada from "../../Componentes/SolicitacaoEnviada";

export default function TesteComponentes() {

    return(
        <View style={styles.main}>
            <SolicitacaoEnviada/>
        </View>
    )
}



const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: "white"
    }

})