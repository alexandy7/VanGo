import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Perfil";
import { Token, UserData } from "../../services/Contexts/Contexts";
import PerfilVisualizacao from "../../Componentes/PerfilVisualizacao";
import styles from "./VisualizarCliente.modules";
import CaixaPerfil from "../../Componentes/CaixaPerfil";
import { Ionicons } from '@expo/vector-icons'
import ApiMotorista from "../../services/Api/ApiMotorista";


const VisualizarCliente = ({ route }) => {

    const navigation = useNavigation()

    const { nome, foto, id } = route.params;
    const [cliente, setCliente] = useState({});

    const [nomeSobrenome, setNomeSobrenome] = useState(' ')
    const [nomeResponsável, setNomeResponsavel] = useState(' ')
    const [enderecoUsuario, setEnderecoUsuario] = useState(' ')
    const [enderecoUsuario2, setEnderecoUsuario2] = useState(' ')
    const [escola, setEscola] = useState(' ')

    useEffect(() => {
        console.log(nome, foto, id)
        BuscarCliente();

        let nomeSeparado = nome.split(' ');
        setNomeSobrenome(nomeSeparado[0] + ' ' + nomeSeparado[1])
    }, []);

    async function BuscarCliente() {
        try {

            const token = await Token();

            let response = await ApiMotorista.get(`BuscarCliente/${id}`, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            });

            let json = response.data;
            setCliente(json);

            let responsavelSeparado = json.responsavel_cliente.split(' ')
            setNomeResponsavel(responsavelSeparado);
            if (responsavelSeparado.length > 1) {

                let nomeResponsavel = responsavelSeparado[0] + ' ' + responsavelSeparado[1];
                setNomeResponsavel(nomeResponsavel + '...');
            }

            let enderecoSeparado = json.endereco_cliente.split(' ');
            let endereco = enderecoSeparado[0] + ' ' + enderecoSeparado[1];
            setEnderecoUsuario(endereco + '...');

            let endereco2Separado = json.endereco_reserva.split(' ');
            let endereco2 = endereco2Separado[0] + ' ' + endereco2Separado[1];
            setEnderecoUsuario2(endereco2 + '...')

            let escolaSeparado = json.escola_cliente.split(' ');
            let escola = escolaSeparado[0] + ' ' + escolaSeparado[1];
            setEscola(escola + '...')
        }
        catch (error) {
            console.log(error);
        }
    }

    if (cliente) {
        // Formatando as informações para caber na "caixa"

    }

    return (
        <ScrollView style={styles.geral}>

            <View>
                <PerfilVisualizacao
                    fotoUser={{ uri: foto }}
                    nomeUser={nomeSobrenome}
                    evento={() => navigation.goBack()}
                />


                <View style={styles.regua}>
                    <CaixaPerfil
                        brushOrChat={"chatbubbles"}
                        texto1={nomeResponsável}
                        titulotexto1={"Responsável"}
                        icontexto1={"person-outline"}
                        texto2={escola}
                        titulotexto2={"Escola"}
                        icontexto2={"time-outline"}
                        texto3={enderecoUsuario}
                        titulotexto3={"Endereço"}
                        icontexto3={"home-outline"}
                        texto4={enderecoUsuario2}
                        titulotexto4={"2° endereço"}
                        icontexto4={"business-outline"}
                        evento={() => { navigation.navigate("Chat") }}
                    />
                </View>

            </View>
        </ScrollView>
    )
}

export default VisualizarCliente;