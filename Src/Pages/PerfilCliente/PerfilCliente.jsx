import React, { useContext, useEffect, useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Perfil";
import InfoPerfil from "../../Componentes/InfoPerfil";
import PincelEditar from "../../Componentes/PincelEditar";
import styles from "./PerfilCliente.modules.jsx"
import InserirMotorista from "../../Componentes/InserirTurma";
import { AuthContext } from "../../Contexts/Contexts";

export default function PerfilCliente() {

    const { user } = useContext(AuthContext);

    const [nomeUsuario, setNomeUsuario] = useState()

    const navigation = useNavigation();

    const irEditarCliente = () => {
        navigation.navigate("EditarCliente")
    }
    useEffect(() => {
        const nome = user.nome_cliente;
        const partesNome = nome.split(' ') // Separa as palavras com o espaço

        if (partesNome.length >= 2) {
            const nome1 = partesNome[0];
            const nome2 = partesNome[1];
            const NomeSobrenome = nome1 + ' ' + nome2;
            setNomeUsuario(NomeSobrenome)
            console.log(NomeSobrenome)
        }
    }, [])

    return (
        <ScrollView>

            <View style={styles.geral}>

                <View style={styles.m}>

                    <Perfil
                        evento={() => { navigation.navigate('ConfigDoMoto') }}
                        fotoUser={user.foto_cliente}
                        nomeUser={nomeUsuario}>
                    </Perfil>

                    <View style={styles.geral2}>

                        <View style={styles.cima}>
                            <InfoPerfil
                                imagemtitulo="person-outline"
                                titulo={user.responsavel_cliente}
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
                                titulo={user.endereco_cliente}
                                subtitulo={'Endereço'}>
                            </InfoPerfil>

                            <InfoPerfil
                                imagemtitulo="hourglass-outline"
                                titulo={'Positivo'}
                                subtitulo={'Status'}>
                            </InfoPerfil>
                        </View>

                        <View style={styles.pincel}>
                            <PincelEditar img={require('../../../assets/pincel.png')}
                                evento={() => { navigation.navigate("EditarCliente")}}>

                            </PincelEditar>
                        </View>
                    </View>


                </View>
            </View>
        </ScrollView>
    )
}
