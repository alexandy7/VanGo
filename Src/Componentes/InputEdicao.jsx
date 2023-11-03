import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from "react-native";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat"
import { TextInputMask } from "react-native-masked-text";
export default function InputEdicao({ dado, valor, mudou, sombra, largura, borda, formato, typeInput }) {

    const [fonteLoaded] = useFonts({
        Montserrat_400Regular
    });

    if (!fonteLoaded) {
        return null;
    };

    return (
        <View style={[styles.container, { elevation: sombra ? 0 : 3, width: largura, }]}>

            {
                formato ? (

                    <TextInputMask
                        type={typeInput}
                        options={{
                            format: formato,
                        }}
                        placeholder={dado}
                        value={valor}
                        onChangeText={mudou}
                        placeholderTextColor="#b8b8b8"
                        style={[styles.input, { borderWidth: borda ? 1 : 0, borderColor: borda ? '#f7f7f7' : 'transparent' }]}
                    />
                )
                    :
                    (
                        <TextInput
                            placeholder={dado}
                            value={valor}
                            onChangeText={mudou}
                            placeholderTextColor="#b8b8b8"
                            style={[styles.input, { borderWidth: borda ? 1 : 0, borderColor: borda ? '#f7f7f7' : 'transparent' }]}
                            keyboardType={typeInput}
                        />
                    )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderRadius: 10,
        backgroundColor: "#f7f7f7",
        display: "flex",
        paddingLeft: "3%",
        paddingRight: "3%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignSelf: "center",
        marginBottom: 18,


    },

    input: {
        fontSize: 14,
        width: "100%",
        fontFamily: "Montserrat_400Regular"
    },

    icon: {
        top: 1
    }

})