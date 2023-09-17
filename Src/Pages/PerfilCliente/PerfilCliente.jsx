import React, { useEffect, useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Perfil";
import styles from "./PerfilCliente.modules.jsx"
import { UserData } from "../../services/Contexts/Contexts";
import CaixaPerfil from "../../Componentes/CaixaPerfil";
import FormatadorTexto from "../../services/Formatadores/FormatadorTextos/FormatadorTextos";


export default function PerfilCliente() {

    const [usuario, setUsuario] = useState({})
    const [nomeUsuario, setNomeUsuario] = useState(' ')
    const [nomeResponsável, setNomeResponsavel] = useState(' ')
    const [enderecoUsuario, setEnderecoUsuario] = useState(' ')

    const navigation = useNavigation()

    useEffect(() => {

        async function BuscarUsuario() {
            const response = await UserData();
            setUsuario(response);

            if (response.nome_cliente) {
                console.log(usuario)
                let nomeSeparado = response.nome_cliente.split(' ')
                let nome = nomeSeparado[0] + ' ' + nomeSeparado[1]
                setNomeUsuario(nome)

                let responsavelSeparado = response.responsavel_cliente.split(' ')
                let nomeResponsavel = responsavelSeparado[0] + ' ' + responsavelSeparado[1]
                setNomeResponsavel(nomeResponsavel + '...')

                let enderecoSeparado = response.endereco_cliente.split(' ')
                let endereco = enderecoSeparado[0] + ' ' + enderecoSeparado[1]
                setEnderecoUsuario(endereco + '...')
            }

        }

        BuscarUsuario()
    }, [])

    return (
        <ScrollView style={styles.geral}>

            <View>

                <Perfil
                    evento={() => { navigation.navigate('ConfiguracaoCliente') }}
                    fotoUser={{ uri: usuario.foto_cliente }}
                    nomeUser={nomeUsuario}>
                </Perfil>


                <View style={styles.regua}>
                    <CaixaPerfil responsavel={nomeResponsável}
                        horario={"18:30"}
                        endereco={enderecoUsuario}
                        status={"Positivo"}
                        evento={() => { navigation.navigate("EditarCliente") }}></CaixaPerfil>
                </View>

            </View>
        </ScrollView>
    )
}
