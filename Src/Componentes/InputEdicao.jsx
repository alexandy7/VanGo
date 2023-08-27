import React from "react";
import { View, StyleSheet, Text} from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from "react-native";

export default function InputEdicao({icone, dado}) {

    return(
        <View style={styles.container}>

            <View style={styles.divicon}>
                <Ionicons style={styles.icon} name={icone} size={25} color="#b1aeae"/>
            </View>

                <TextInput placeholder={dado} placeholderTextColor= "lightgray" style={styles.input}></TextInput>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: "85%",
        borderWidth: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "lightgray",
        backgroundColor: "white",
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
        width: "90%"
    },
    
    icon: {
        top: 1
    }
    
})