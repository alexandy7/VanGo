import React, { useState } from "react";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Common/Perfil";
import InfoPerfil from "../../Componentes/Common/InfoPerfil";
import PincelEditar from "../../Componentes/Common/PincelEditar";
import styles from "./PerfilCliente.modules.jsx"

export default function PerfilCliente() {

    const [nomeUsuario, setNomeUsuario] = useState([])

    const navigation = useNavigation();

    const irConfig = () => {
        navigation.navigate('ConfigDoCliente');
    };

    const irEditarPerfil = () => {
        navigation.navigate('PerfilMotorista');
    };

    return (
        <View style={styles.geral}>

            <Perfil
                evento={irConfig}
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
                    <PincelEditar img={require('../../../assets/pincel.png')} evento={irEditarPerfil}
                    //TROCAR ESSA BOMBA, COLOQUEI SO PRA TESTAR
                    >
                    </PincelEditar>
                </View>
            </View>
            </View>
    )
}



// É necessário arrumar a possição das informações ainda, estão desalinhadas
// Arrumar o pincel de edição. Uma parte dele está cortada