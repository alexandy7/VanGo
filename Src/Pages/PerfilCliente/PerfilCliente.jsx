import React, { useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Perfil";
import InfoPerfil from "../../Componentes/InfoPerfil";
import PincelEditar from "../../Componentes/PincelEditar";
import styles from "./PerfilCliente.modules.jsx"
import InserirMotorista from "../../Componentes/InserirMotorista";

export default function PerfilCliente() {

    const [nomeUsuario, setNomeUsuario] = useState([])

    const navigation = useNavigation();

    const irConfiguracao = () => {
        navigation.navigate('ConfigDoMoto')

    };

    const irEditarCliente= () =>{
        navigation.navigate("EditarCliente")
    }



    return (
        <ScrollView>

            <View style={styles.geral}>

                <View style={styles.m}>

                    <Perfil
                        evento={irConfiguracao}
                        fotoUser={require('../../../assets/UserPhoto.png')}
                        nomeUser={'Karen Cristina'}>
                    </Perfil>

                    <View style={styles.geral2}>

                        <View style={styles.cima}>
                            <InfoPerfil
                                imagemtitulo="person-outline"
                                titulo={'Noemia'}
                                subtitulo={'Responsável'}>
                            </InfoPerfil>

                            <InfoPerfil
                                imagemtitulo="time-outline"
                                titulo={'06:30 AM'}
                                subtitulo={'Horário'}>
                            </InfoPerfil>
                        </View>

                        <View style={styles.baixo}>
                            <InfoPerfil
                                imagemtitulo="location-outline"
                                titulo={'R.Moraes..'}
                                subtitulo={'Endereço'}>
                            </InfoPerfil>

                            <InfoPerfil
                                imagemtitulo="hourglass-outline"
                                titulo={'Positivo'}
                                subtitulo={'Status'}>
                            </InfoPerfil>
                        </View>

                        <View style={styles.pincel}>
                            <PincelEditar img={require('../../../assets/pincel.png')} evento={irEditarCliente}></PincelEditar>
                        </View>
                    </View>

                    <InserirMotorista></InserirMotorista>

                </View>
            </View>
        </ScrollView>
    )
}
