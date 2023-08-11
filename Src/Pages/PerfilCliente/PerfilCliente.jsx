import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Common/Perfil";
import InfoPerfil from "../../Componentes/Common/InfoPerfil";
import PincelEditar from "../../Componentes/Common/PincelEditar";


export default function PerfilCliente() {

    const [nomeUsuario, setNomeUsuario] = useState([])

    const navigation = useNavigation();

    const irConfig = () => {
        navigation.navigate('ConfigMoto')

    };

    return (
        <View style={styles.geral}>
            <Perfil
                evento={irConfig}
                fotoUser={require('../../../assets/UserPhoto.png')}
                nomeUser={'NomeUsuario'}>
            </Perfil>

            <View style={styles.informacoes}>

                <View style={styles.topo} >

                    <InfoPerfil
                        imagemtitulo={require('../../../assets/profilrNoPerfil.png')}
                        titulo={'Noemia'}
                        subtitulo={'Responsável'}
                    ></InfoPerfil>

                    <View style={styles.clock}>
                        <InfoPerfil
                            imagemtitulo={require('../../../assets/cockPerfil.png')}
                            titulo={'06:30 AM'}
                            subtitulo={'  Horário'}></InfoPerfil>
                    </View>
                </View>


                <View style={styles.baixo} >
                    <InfoPerfil
                        imagemtitulo={require('../../../assets/homePerfil.png')}
                        titulo={'R.Moraes..'}
                        subtitulo={'  Endereço'}
                    ></InfoPerfil>
                    <InfoPerfil
                        imagemtitulo={require('../../../assets/status.png')}
                        titulo={'Positivo'}
                        subtitulo={'  Status'} ></InfoPerfil>
                </View>

                <PincelEditar img={require('../../../assets/pincel.png')}></PincelEditar>
            </View>

            <View style={styles.infoMoto}>
                <Text style={styles.tituloMoto} >Seu motorista é:</Text>
                <View>
                    <Image source={require('../../../assets/fotoMotorista.png')} />
                </View>
                <Text style={{ color: 'grey', marginBottom: 5 }}>Tio Rogerinho</Text>

                <TouchableOpacity style={styles.exibirPerfil}>
                    <Text style={styles.exibirPerfilMsg} >Exibir perfil</Text>
                </TouchableOpacity>

            </View>


        </View>
    )
}

const styles = StyleSheet.create(
    {

        geral: {
            flex: 1,
            backgroundColor: 'rgb(250, 250, 250)'
        },

        informacoes: {
            backgroundColor: 'white',
            height: '27%',
            width: '80%',
            bottom: 90,
            borderRadius: 20,
            alignSelf: 'center',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 10,
        },

        topo: {
            flexDirection: 'row',
            alignSelf: 'center',
            marginBottom: 30
        },

        baixo: {
            flexDirection: 'row',
            alignSelf: 'center',
        },

        clock: {
            left: 9 // O relogio esta meio desalinhado, por isso o uso do 'left'
        },

        infoMoto: {
            backgroundColor: 'white',
            height: '27%',
            width: '80%',
            bottom: 60,
            borderRadius: 20,
            alignSelf: 'center',
            alignItems: 'center',
            shadowColor: "black",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 10,
        },

        tituloMoto: {
            fontSize: 19,
            marginBottom: 5
        },

        exibirPerfil: {
            backgroundColor: '#F99A4C',
            borderRadius: 10,
            height: 30,
            width: 140,
            alignItems: 'center',

        },

        exibirPerfilMsg: {
            color: 'white',
            top: 3

        }


    }
)


// É necessário arrumar a possição das informações ainda, estão desalinhadas
// Arrumar o pincel de edição. Uma parte dele está cortada