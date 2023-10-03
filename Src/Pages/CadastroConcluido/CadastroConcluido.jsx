import React from "react";
import { View, Text, Image} from "react-native";
import styles from "./CadastroConcluido.modules";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat"

export default function CadastroConcluido() {

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium
    });

    if (!fonteLoaded) {
        return null;
    }

    return(
        <View style={styles.main}>
            <View style={styles.divimagem}>
                <Image style={styles.imagem} source={require("../../../assets/Logo.png")}/>
            </View>

            <View style={styles.divtexto}>
                <Text style={styles.texto}>Cadastro realizado com sucesso</Text>
            </View>

            <TouchableOpacity style={styles.botaologin}>
                <View style={styles.alinhainicio}>
                    <Text></Text>
                </View>

                <View style={styles.alinhameio}>
                    <Text style={styles.textologin}>Fazer Login</Text>
                </View>

                <View style={styles.alinhafim}>
                    <Ionicons style={styles.icon} name={"chevron-forward-outline"} size={30} color="white"/>
                </View>
            </TouchableOpacity>
        </View>
    )

}