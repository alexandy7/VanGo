import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Perfil";
import styles from "./PerfilCliente.modules.jsx"
import { Token, UserData } from "../../services/Contexts/Contexts";
import CaixaPerfil from "../../Componentes/CaixaPerfil";
import CardVerMotorista from "../../Componentes/CardVerMotorista";
import ApiCliente from "../../services/Api/ApiCiente";


export default function PerfilCliente() {

    const [motorista, setMotorista] = useState({})
    const [usuario, setUsuario] = useState({})
    const [nomeUsuario, setNomeUsuario] = useState(' ')
    const [nomeResponsável, setNomeResponsavel] = useState(' ')
    const [enderecoUsuario, setEnderecoUsuario] = useState(' ')
    const [enderecoUsuario2, setEnderecoUsuario2] = useState(' ')
    const [escola, setEscola] = useState(' ')
    
    const navigation = useNavigation()
    
    useEffect(() => {
        BuscarUsuario();
    }, [])
    
    async function BuscarUsuario() {
        const response = await UserData();
        setUsuario(response);
        BuscarInfoMotorista(response.id_motorista);
        
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
           
            let escolaSeparado = response.escola_cliente.split(' ');
            let escola = escolaSeparado[0] + ' ' + escolaSeparado[1];
            setEscola(escola + '...')
        }
        
    };
    
    async function BuscarInfoMotorista(id){

        let token = await Token();

        let response = await ApiCliente.get(`BuscarInfoMotorista/${id}`,{
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
                    brushOrChat={"brush"}
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
