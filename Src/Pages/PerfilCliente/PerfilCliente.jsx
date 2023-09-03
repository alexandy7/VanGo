import React, { useContext, useEffect, useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Perfil";
import styles from "./PerfilCliente.modules.jsx"
import { AuthContext } from "../../Contexts/Contexts";
import CaixaPerfil from "../../Componentes/CaixaPerfil";

export default function PerfilCliente() {

    const { user } = useContext(AuthContext);

    const [nomeUsuario, setNomeUsuario] = useState(user.nome_cliente)

    const navigation = useNavigation();

    //Formata nome para aparecer somente nome e sobrenome
    // useEffect(() => {
    //     const partesNome = nomeUsuario.split(' ') // Separa as palavras com o espaço

    //     if (partesNome.length >= 2) {
    //         const nome1 = partesNome[0];
    //         const nome2 = partesNome[1];
    //         const NomeSobrenome = nome1 + ' ' + nome2;
    //         setNomeUsuario(NomeSobrenome)
    //         console.log(NomeSobrenome)
    //     }
    // }, [])

    return (
        <ScrollView style={styles.geral}>

            <View>

                <Perfil
                    evento={() => { navigation.navigate('ConfigMotorista') }}
                    fotoUser={{ uri: user.foto_cliente}}
                    nomeUser={nomeUsuario}>
                </Perfil>

                {/* <View style={styles.geral2}>

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

                    </View> */}

                    <View style={styles.regua}>
                        <CaixaPerfil responsavel={"Carlos Alex..."} horario={"18:30"} endereco={"Rua Diamant..."} status={"Positivo"}></CaixaPerfil>
                    </View>

                </View>
        </ScrollView>
    )
}
