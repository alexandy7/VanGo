import React, { useEffect, useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Perfil";
import styles from "./PerfilCliente.modules.jsx"
import { Token, UserData } from "../../services/Contexts/Contexts";
import CaixaPerfil from "../../Componentes/CaixaPerfil";
import CardVerMotorista from "../../Componentes/CardVerMotorista";
import ApiCliente from "../../services/Api/ApiCiente";
import axios from "axios";


export default function PerfilCliente() {

    const [motorista, setMotorista] = useState({})
    const [usuario, setUsuario] = useState({})
    const [nomeUsuario, setNomeUsuario] = useState(' ')
    const [nomeResponsável, setNomeResponsavel] = useState(' ')
    const [enderecoUsuario, setEnderecoUsuario] = useState(' ')
    const [enderecoUsuario2, setEnderecoUsuario2] = useState(' ')
    
    const navigation = useNavigation()
    
    useEffect(() => {
        BuscarUsuario();
        BuscarInfoMotorista();
    }, [])

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
            setEnderecoUsuario2(endereco2 + '...')
        }

    };

    async function BuscarInfoMotorista(){

        let token = await Token();

        let response = await axios.get(`https://localhost:7149/api/Cliente/BuscarInfoMotorista/${1}`,{
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            }
        });

        let json = response.data;
        setMotorista(json);
    };

    return (
        <ScrollView style={styles.geral}>

            <View>

                <Perfil
                    evento={() => { navigation.navigate('ConfiguracaoCliente') }}
                    fotoUser={{ uri: usuario.foto_cliente }}
                    nomeUser={nomeUsuario}>
                </Perfil>


                <View style={styles.regua}>
                    <CaixaPerfil 
                    texto1={nomeResponsável}
                    titulotexto1={"Responsável"}
                    icontexto1={"person-outline"}
                        texto2={"18:30"}
                        titulotexto2={"Horário"}
                        icontexto2={"time-outline"}
                        texto3={enderecoUsuario}
                        titulotexto3={"Endereço"}
                        icontexto3={"home-outline"}
                        texto4={enderecoUsuario2}
                        titulotexto4={"2° endereço"}
                        icontexto4={"business-outline"}

                        evento={() => { navigation.navigate("EditarCliente")}}
                        />

                    <CardVerMotorista
                    imagem={{uri: motorista.foto_motorista}}
                    nome={motorista.nome_motorista}
                    id_turma={usuario.turma_cliente}

                    evento={()=> {navigation.navigate("VisualizarMotorista", {
                        nome_motorista: motorista.nome_motorista,
                        foto_motorista: motorista.foto_motorista,
                        periodo_atuacao_motorista: motorista.periodo_atuacao_motorista,
                        endereco_motorista: motorista.endereco_motorista
                    })}}
                    />
                </View>

            </View>

            
        </ScrollView>
    )
}
