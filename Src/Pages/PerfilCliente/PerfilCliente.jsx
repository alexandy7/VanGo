import React, { useEffect, useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Perfil";
import styles from "./PerfilCliente.modules.jsx"
import { UserData } from "../../services/Contexts/Contexts";
import CaixaPerfil from "../../Componentes/CaixaPerfil";


export default function PerfilCliente() {

    const [usuario, setUsuario] = useState({})
    const [nomeUsuario, setNomeUsuario] = useState(' ')
    const [nomeResponsável, setNomeResponsavel] = useState(' ')
    const [enderecoUsuario, setEnderecoUsuario] = useState(' ')
    const [enderecoUsuario2, setEnderecoUsuario2] = useState(' ')

    const navigation = useNavigation()

    useEffect(() => {

        async function BuscarUsuario() {
            const response = await UserData();
            setUsuario(response);

            // Formatando as informações para caber na "caixa"
            if (response.nome_cliente) {
                let nomeSeparado = response.nome_cliente.split(' ')
                let nome = nomeSeparado[0] + ' ' + nomeSeparado[1]
                setNomeUsuario(nome);

                let responsavelSeparado = response.responsavel_cliente.split(' ')
                setNomeResponsavel(responsavelSeparado);
                if(responsavelSeparado.length > 1){

                    let nomeResponsavel = responsavelSeparado[0] + ' ' + responsavelSeparado[1];
                    setNomeResponsavel(nomeResponsavel + '...');
                }

                let enderecoSeparado = response.endereco_cliente.split(' ');
                let endereco = enderecoSeparado[0] + ' ' + enderecoSeparado[1];
                setEnderecoUsuario(endereco + '...');

                let endereco2Separado = response.endereco_reserva.split(' ');
                let endereco2 = endereco2Separado[0] + ' ' + endereco2Separado[1];
                setEnderecoUsuario2(endereco2)
            }

        }

        BuscarUsuario()
    }, [usuario])

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
                        endereco2={"Positivo"}
                        evento={() => { navigation.navigate("EditarCliente") }}></CaixaPerfil>
                </View>

            </View>
        </ScrollView>
    )
}
