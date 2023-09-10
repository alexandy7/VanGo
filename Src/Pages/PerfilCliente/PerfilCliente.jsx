import React, { useContext, useEffect, useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Perfil";
import styles from "./PerfilCliente.modules.jsx"
import { UserData } from "../../services/Contexts/Contexts";
import CaixaPerfil from "../../Componentes/CaixaPerfil";
import FormatadorTexto from "../../services/Formatadores/FormatadorTextos/FormatadorTextos";
export default function PerfilCliente() {


    const [user, setUser] = useState({});

    const navigation = useNavigation();

    async function BuscarUsuario(){
        const usuario = await UserData();
        setUser(usuario);
    }

    useEffect(() => {
        BuscarUsuario();
    }, [])
    
    let nomeSeparado = user.nome_cliente.split(' ');
    let nome1 = nomeSeparado[0];
    let nome2 = nomeSeparado[1];
    let nomeSobrenome = nome1 + ' ' + nome2;
    return (
        <ScrollView style={styles.geral}>

            <View>

                <Perfil
                    evento={() => { navigation.navigate('ConfiguracaoCliente') }}
                    fotoUser={{ uri: user.foto_cliente }}
                    nomeUser={nomeSobrenome}>
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

                <View style={styles.pincel}>
                    <PincelEditar img={require('../../../assets/pincel.png')}
                        evento={() => { navigation.navigate("EditarCliente") }}>

                    </PincelEditar>
                </View>
                </View>*/}

                <View style={styles.regua}>
                    <CaixaPerfil responsavel={FormatadorTexto(user.responsavel_cliente, 2, 1)}
                        horario={"18:30"}
                        endereco={FormatadorTexto(user.endereco_cliente, 10, 1)}
                        status={"Positivo"}></CaixaPerfil>
                </View>

            </View>
        </ScrollView>
    )
}
