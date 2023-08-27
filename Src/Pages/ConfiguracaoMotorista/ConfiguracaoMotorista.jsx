import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import Lista from "../../Componentes/Lista";
import styles from "./ConfiguracaoMotorista.modules";

export default function ConfiguracaoMotorista() {

    const navigation = useNavigation();

    const irPerfil = () => {
        navigation.navigate('TabBarScreen')
    }

    return (
        <View style={styles.geral}>
           
                <View style={styles.config}>

                    <TouchableOpacity style={styles.setaInvertida} onPress={irPerfil}>
                        <View >
                        <Ionicons name="chevron-back-outline" size={30}/>
                        </View>
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.configText} >Configurações</Text>
                    </View>
                </View>
         


            <View style={styles.todasInfos}>

            <Text style={{marginLeft: 30, bottom: 8, fontSize: 14}}>Conta</Text>

                <View style={styles.conta} >

                    <Lista icone='person' titulo="Conta"></Lista>
                    <Lista icone='lock-closed' titulo="Privacidade"></Lista>
                    <Lista icone='notifications' titulo="Notificações"></Lista>
                    
                </View>


                <Text style={{marginLeft: 30, bottom: 8, fontSize: 14}}>Motorista</Text>

                <View style={styles.motorista}>

                    <Lista icone='eye'titulo="Ver clientes"></Lista>
                    <Lista icone='cloudy-night' titulo="Visualizar turmas"></Lista>
                    <Lista icone='chatbubbles' titulo="Chat"></Lista>
                    

                </View>
            </View>

        </View>
    );
}
  