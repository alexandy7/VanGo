import React, { useEffect, useState } from "react";
import { View, StyleSheet, Modal, TouchableOpacity, Text } from "react-native";
import TituloCadastro from '../../Componentes/Titulocadastros'
import MeuText from '../../Componentes/MeuText'
import Touchable from "../../Componentes/Touchable";
import { Calendar } from "react-native-calendars";
import { Ionicons } from '@expo/vector-icons'
import { UserData } from "../../services/Contexts/Contexts"
import Calendario from "../../Componentes/Calendario";
export default function CadastroVeiculo() {


    const [usuario, setUsuario] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [currentDate, setCurrentDate] = useState('');
    const [diaAusencia, setDiaAusencia] = useState('');
    const [corAusencia, setCorAusencia] = useState('#F7770D');
    const [corAgendado, setCorAgendado] = useState('#C4C4C4B5');

    //lógica para deixar o dia atual marcado no calendario
    // let currentDateString2 = new Date().toISOString().slice(0, 10)

    return (
        <View style={styles.geral}>
            <Calendario 
            showModal={true}
            dayPress={
                day => {
                    //Caso clique sobre o dia que já esta selecionado, retira a seleção
                    if (day.dateString === currentDate) {
                        setCurrentDate('');
                        setCorAgendado('#C4C4C4B5');
                        setCorAusencia('#F7770D');
                        return;
                    };

                    setCurrentDate(day.dateString);
                    setCorAgendado('#F7770D');
                    setCorAusencia('#C4C4C4B5');
                }
            }
            />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        geral: {
            flex: 1,
        },

        botao: {
            flex: 1,
            marginTop: 265,
        },

        main: {
            flex: 1,
            backgroundColor: '#EFEFEF'
        },

        header: {
            height: "25%",
            backgroundColor: "#F7770D",
            display: "flex",
            flexDirection: "row"
        },

        alinhanomefoto: {
            position: "relative",
            width: "60%",
            height: "100%",
            display: "flex"
        },

        divfoto: {
            position: "relative",
            height: "60%",
            justifyContent: "center"
        },

        foto: {
            position: "relative",
            width: "40%",
            height: "70%",
            marginLeft: "10%",
            marginTop: "7%",
            borderRadius: 30
        },

        divnome: {
            height: "40%",
            display: "flex",
            position: "relative",
        },

        nome: {
            fontSize: 23,
            marginLeft: "5%",
            color: "white"
        },

        divicones: {
            width: "40%",
            height: "100%",
            display: "flex",
            flexDirection: "row"
        },

        alinhaicone: {
            height: "50%",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center"
        },

        divbotoes: {
            width: "90%",
            height: "15%",
            alignSelf: "center",
            marginTop: "5%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly"
        },

        alinhabotao: {
            display: "flex",
            flexDirection: "row",
            width: "23%",
            height: "100%"
        },

        seta: {
            position: "relative",
        },

        viewCalendario: {
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            borderWidth: 1,
            borderColor: '#F7770D',
            margin: 20,
            borderRadius: 15,
        },

        calendario: {
            borderRadius: 15,
            textDayFontWeight: '600',
            arrowColor: '#F04D23',
            monthTextColor: 'black',
            selected: true,
            selectedColor: 'red',
        },

        botaoAusencia: {

            borderRadius: 10,
            margin: 5,
            padding: 10,
            width: "90%",
            display: 'flex',
            alignItems: "center",
        },

        botaoFalta: {
            borderRadius: 10,
            margin: 5,
            padding: 10,
            width: "90%",
            display: 'flex',
            alignItems: "center",
        },

        botoesCalendario: {
            display: "flex",
            alignItems: "center",
            margin: 20,

        },

        modalCalendario: {
            display: "flex",
            justifyContent: "center",
            backgroundColor: 'rgba(128, 128, 128, 0.60)',
            height: "100%"
        }

    }
)