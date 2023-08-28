//J-- so copiei oq o yago acabou fazendo na tela do cliente

import React, { useState } from "react";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Common/Perfil";
import InfoPerfil from "../../Componentes/Common/InfoPerfil";
import PincelEditar from "../../Componentes/Common/PincelEditar";
import styles from "./PerfilMotorista.modules.jsx"

export default function PerfilMotorista() {

   // const [nomeMotorista, setNomeMotorista] = useState([])

    const navigation = useNavigation();

    const irConfig = () => {
        navigation.navigate('ConfigDoMoto')
    };

    const teste = () => {
        navigation.navigate('PerfilCliente');
    };

    return (
        <View style={styles.geral}>

            <Perfil
                evento={irConfig}
                fotoUser={'https://i.pinimg.com/564x/7f/4a/63/7f4a639583aa9a1c5144a181e3ab32a9.jpg'}
                nomeUser={'Tio Rogerinho'}>
            </Perfil>

            <View style={styles.geral2}>

                <View style={styles.cima}>
                    <InfoPerfil // informações do veiculo
                        imagemtitulo="person-outline"
                        titulo={'Peugeot Boxer'}
                        subtitulo={'Modelo'}>
                    </InfoPerfil>

                    <InfoPerfil //informações sobre a cor do veiculo
                        imagemtitulo="time-outline"
                        titulo={'Branco'}
                        subtitulo={'Cor'}>
                    </InfoPerfil>
                </View>

                <View style={styles.baixo}>
                    <InfoPerfil  //informações sobre a cidade que o moto trampa
                        imagemtitulo="location-outline"
                        titulo={'Osasco'}
                        subtitulo={'Cidade'}>
                    </InfoPerfil>

                    <InfoPerfil  //informações sobre o horario de funcionamneto
                        imagemtitulo="hourglass-outline"
                        titulo={'06:00 - 18:00'}
                        subtitulo={'Horário'}>
                    </InfoPerfil>
                </View>

                <View style={styles.pincel}>
                    <PincelEditar img={require('../../../assets/pincel.png')} evento={teste}></PincelEditar>
                </View>

            </View>
        </View>
    )
}