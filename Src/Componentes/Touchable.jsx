import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"

export default function Touchable({ texto, evento }) {

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
    });

    if (!fonteLoaded) {
        return null;
    }

    return (

        <TouchableOpacity onPress={evento}>
            <View style={styles.prosseguir}>
                <Text style={styles.textoProsseguir}>{texto}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create(
    {
        prosseguir: {
            backgroundColor: '#F7770D',
            alignSelf: 'center',
            width: 290,
            height: 53,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            top: 40,
            marginBottom: 60, // Esta com essa margem para que o ScrollView não corte parte dele
            zIndex: 1
        },

        textoProsseguir: {
            color: 'white',
            fontSize: 20,
            fontFamily: "Montserrat_500Medium"
        },

        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: -40
        },
    }
)

