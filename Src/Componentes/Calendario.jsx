import React, { useState } from "react";
import { View, StyleSheet, Modal, TouchableOpacity, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import { Ionicons } from '@expo/vector-icons';


export default function Calendario(showModal) {

    const [currentDate, setCurrentDate] = useState('');
    const [diaAusencia, setDiaAusencia] = useState('');
    const [corAusencia, setCorAusencia] = useState('#F7770D');
    const [corAgendado, setCorAgendado] = useState('#C4C4C4B5');

    //lógica para deixar o dia atual marcado no calendario
    // let currentDateString2 = new Date().toISOString().slice(0, 10)

    return (
        <View style={styles.geral}>
            <Modal visible={showModal} animationType="fade" transparent={true}>
                <View style={styles.modalCalendario}>
                

                    <View style={styles.viewCalendario}>
                        <Calendar
                            style={styles.calendario}
                            markedDates={{
                                [currentDate]: { selected: true, selectedColor: '#F7770D' },
                            }}

                            onDayPress={day => {
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
                            }}

                        />
                        <View style={styles.botoesCalendario}>
                            <TouchableOpacity onPress={evento} style={[styles.botaoAusencia, { backgroundColor: corAusencia }]}>
                                <Text style={{ color: "white" }}>Ausência hoje</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.botaoFalta, { backgroundColor: corAgendado }]}>
                                <Text style={{ color: "red" }}>Agendzftyhrfhar Falta</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        geral: {
            flex: 1,
        },

        main: {
            flex: 1,
            backgroundColor: '#EFEFEF'
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