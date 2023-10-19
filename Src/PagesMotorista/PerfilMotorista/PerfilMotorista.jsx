import React, { useEffect, useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Perfil from "../../Componentes/Perfil";
import styles from "./PerfilMotorista.modules";
import { Token, UserData } from "../../services/Contexts/Contexts";
import CaixaPerfil from "../../Componentes/CaixaPerfil";
import CaixaPerfilMotorista from "../../Componentes/CaixaPerfilMotorista";
import FormatadorTexto from "../../services/Formatadores/FormatadorTextos/FormatadorTextos";
import { ActivityIndicator } from "react-native";


export default function PerfilMotorista() {

    const navigation = useNavigation();

    const [user, setUser] = useState({});
    const [nome, setNome] = useState('');
    const [x, setX] = useState(false);

    useEffect(() => {
        BuscarUsuario()
    }, []);

    async function BuscarUsuario() {
        let usuario = await UserData();
        setUser(usuario);
        setX(true);

        let separado = usuario.nome_motorista.split(' ');
        let nomeSobrenome = separado[0] + ' ' + separado[1];
        setNome(nomeSobrenome);
    };

    return (
        <ScrollView style={styles.geral}>

            <View>
                <Perfil
                    fotoUser={{uri: user.foto_motorista}}
                    nomeUser={nome}>
                </Perfil>

                {
                    x ? (

                        <View style={styles.regua}>
                            <CaixaPerfil 
                        texto1={"5 Anos"}
                        titulotexto1={"Tempo"}
                        icontexto1={"hourglass-outline"}
                        texto2={user.QuantidadeClientes}
                        titulotexto2={"Alunos"}
                        icontexto2={"person-outline"}
                        texto3={FormatadorTexto(user.endereco_motorista, 1, 2)}
                        titulotexto3={"Cidade"}
                        icontexto3={"business-outline"}
                        texto4={"Integral"}
                        titulotexto4={"Periodo"}
                        icontexto4={"time-outline"}
                        brushOrChat={"brush"}
                        evento={() => { navigation.navigate("EditarMotorista") }}
                    />
                        </View>
                    )
                        :
                        (
                            <View>
                            </View>
                        )
                }
            </View>
        </ScrollView>
    )
}
