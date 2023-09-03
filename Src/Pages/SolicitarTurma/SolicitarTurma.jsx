import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import InserirTurma from "../../Componentes/InserirTurma";
import ApiMotorista from "../../services/ApiMotorista";
import { AuthContext } from "../../Contexts/Contexts";
import ApiCliente from "../../services/ApiCiente";
import TituloCadastro from "../../Componentes/Titulocadastros";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'

// import { useFonts, Montserrat_200ExtraLight } from "@expo-google-fonts/montserrat";

export default function SolicitarTurma() {
    // const[fontsLoaded] = useFonts({
    //     Montserrat_200ExtraLight
    // })

    const navigation = useNavigation();
    const [solicitacaoenviada, setSolicitacaoenviada] = useState(false);
    const [codigo, setCodigo] = useState('');
    const { user } = useContext(AuthContext);

    console.log(user.turma_cliente);

    if(user.turma_cliente !== null){
        navigation.navigate("TabBarScreen");
    }

    const data = {

        Nome_cliente: user.nome_cliente,
        Foto_cliente: user.foto_cliente,
        Id_cliente: user.id_cliente,
        Id_turma: Number(codigo)

    }

    async function EnviarSolicitacao() {

        try {

            let response = await ApiCliente.post('VerificarTurmaAndSolicitar', data, {
                headers: {
                    'Content-Type': 'application/json',
                },

            });
            
            setSolicitacaoenviada(true);
        }

        catch (error) {

            console.error("Houve um erro aqui: ", error);
        }

    }

    return (
        <View style={styles.container}>



            {
                solicitacaoenviada ? (
                    
                    <View>
                        <View style={styles.SolicitacaoEnviada}>
                        <Text style={{fontSize: 30}}>Solicitação enviada!</Text>
                        <Ionicons name="checkmark-circle" size={30} color="green" style={{top:"1%"}} />
                        
                        </View>
                        <Text style={styles.MsgAguardando}>Aguardando resposta </Text>
                        <Text style={styles.MsgAguardando2}>do motorista...</Text>
                        
                        <Image source={require("../../../assets/waiting.gif")} style={styles.gifWainting}></Image>

                    </View>
                )
                :
                (
                    <View>
                            <Text style={{ fontSize: 35, alignSelf: "center", marginTop: "20%" }}>Solicitação</Text>

                            <View style={styles.ViewGif}>
                                <Image source={require("../../../assets/BusGif.gif")} style={styles.gifBus}></Image>
                            </View>
                            <View style={styles.inserirTurma}>
                                <InserirTurma evento={() => EnviarSolicitacao()} valor={setCodigo}></InserirTurma>
                            </View>

                        </View>
                    )
            }

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        
    },

    ViewGif: {
        marginTop: "10%",
        marginBottom: "10%",
    },

    gifBus: {
        height: 150,
        width: "60%",
        alignSelf: 'center'
    },

    MsgAguardando:{
        alignSelf: "center",
        marginTop: "40%",
        fontSize: 20,
        // fontFamily: "Montserrat_200ExtraLight"        

    },

    MsgAguardando2:{
        alignSelf: "center",
        fontSize: 20
    },

    gifWainting:{
        alignSelf: "center",
        marginTop: "10%"
    },

    SolicitacaoEnviada:{
        alignSelf: "center",
        flexDirection: "row",
        marginTop: "20%"
    }
})