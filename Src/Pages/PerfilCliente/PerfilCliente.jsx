import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Common/Perfil";
import InfoPerfil from "../../Componentes/Common/InfoPerfil";
import PincelEditar from "../../Componentes/Common/PincelEditar";
import styles from "./PerfilCliente.modules.jsx"


export default function PerfilCliente() {

    const [nomeUsuario, setNomeUsuario] = useState([])

    const navigation = useNavigation();

    const irConfig = () => {
        navigation.navigate('ConfigMoto')

    };

    return (
        <View>

            <Perfil
                evento={irConfig}
                fotoUser={require('../../../assets/fotoMotorista.png')}
                nomeUser={'Karen Cristina'}>
            </Perfil>

            <View style={styles.geral}>

                <View style={styles.cima}>
                    <InfoPerfil
                        imagemtitulo="person"
                        titulo={'Noemia'}
                        subtitulo={'Responsável'}>
                    </InfoPerfil>

                    <InfoPerfil
                        imagemtitulo="time"
                        titulo={'06:30 AM'}
                        subtitulo={'Horário'}>
                    </InfoPerfil>
                </View>

                <View style={styles.baixo}>
                    <InfoPerfil
                        imagemtitulo="location"
                        titulo={'R.Moraes..'}
                        subtitulo={'Endereço'}>
                    </InfoPerfil>

                    <InfoPerfil
                        imagemtitulo="hourglass"
                        titulo={'Positivo'}
                        subtitulo={'Status'}>
                    </InfoPerfil>
                </View>

                <View style={styles.pincel}>
                    <PincelEditar img={require('../../../assets/pincel.png')}></PincelEditar>
                </View>
            </View>

        </View>
    )
}



// É necessário arrumar a possição das informações ainda, estão desalinhadas
// Arrumar o pincel de edição. Uma parte dele está cortada