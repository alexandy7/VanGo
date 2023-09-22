import React from "react";
import { View, StyleSheet, Text} from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from "react-native";
import { useFonts, Montserrat_400Regular} from "@expo-google-fonts/montserrat"

export default function InputEdicao({icone, dado, valor, mudou}) {

    const [fonteLoaded] = useFonts ({
        Montserrat_400Regular
    });

    if (!fonteLoaded) {
        return null;
    }

    return(
        <View style={styles.container}>

            <View style={styles.divicon}>
                <Ionicons style={styles.icon} name={icone} size={25} color="#b8b8b8"/>
            </View>

                <TextInput 
                placeholder={dado}  
                value={valor}
                onChangeText={mudou}
                placeholderTextColor="#b8b8b8" 
                style={styles.input}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: "85%",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "lightgray",
        backgroundColor: "#fafafa",
        elevation: 3,
        display: "flex",
        paddingLeft: "3%",
        paddingRight: "3%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignSelf: "center",
        marginBottom: 10
    },

    divicon: {
        display: "flex",
        justifyContent: "center",
        width: "10%",
    },

    input: {
        fontSize: 14,
        width: "90%",
        fontFamily: "Montserrat_400Regular"
    },
    
    icon: {
        top: 1
    }
    
})