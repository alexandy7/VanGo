import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import Lista from "../../Componentes/Common/Lista";


export default function ConfigMoto() {

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

const styles = StyleSheet.create({

    geral:{
        flex: 1,
        backgroundColor: '#EFEFEF',
        alignItems: 'center',
        

    },

    config: {
        
        flexDirection: 'row', //Deixando elementos lado a lado
        marginTop: 50
      
    },

    setaInvertida:{
        right: 80
    }, // Aqui não consegui posicionar a seta de outra forma, então deixei assim, mas precisamos descobrir como arrumar da forma certa

    configText: {
        fontSize: 23,
        marginBottom: 50
    },
    
    conta: {
        borderRadius: 28,
        backgroundColor: 'white',
        marginBottom: 50
    },

    motorista: {
        borderRadius: 28,
        backgroundColor: 'white',
    }


});


//Baixei todas as imagens e inseri no projeto
//Maximo das estilizações deixei pronta no próprio componente ao inves da pagina
//Alterei o nome da variavel do StyleSheet para uma padronização    