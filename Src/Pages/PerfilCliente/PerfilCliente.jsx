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
    const [nomeUsuario, setNomeUsuario] = useState()

    const navigation = useNavigation()

    async function BuscarUsuario(){
            const response = await UserData();
            setUsuario(response)
    }

     useEffect(() => {
        BuscarUsuario()
     }, [])


     let nomeSobrenome = '';
     if(usuario.nome_cliente){

        let nomeSeparado = usuario.nome_cliente.split(' ')
        let nome1 = nomeSeparado[0]
        let nome2 = nomeSeparado[1]
        nomeSobrenome = nome1 + ' ' + nome2
     }

    return (
        <ScrollView style={styles.geral}>

            <View>

                <Perfil
                    evento={() => { navigation.navigate('ConfiguracaoCliente') }}
                    fotoUser={{ uri: usuario.foto_cliente}}
                    nomeUser={nomeSobrenome}>
                </Perfil>


                    <View style={styles.regua}>
                        <CaixaPerfil responsavel={usuario.responsavel_cliente} 
                        horario={"18:30"} 
                        endereco={usuario.endereco_cliente} 
                        status={"Positivo"}
                        evento={()=> {navigation.navigate("EditarCliente")}}></CaixaPerfil>
                    </View> 

                </View> 
        </ScrollView>
    )
}
