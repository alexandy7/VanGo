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
    const [x, setX] = useState(false);

    useEffect(() => {
        BuscarUsuario()
    }, []);

    async function BuscarUsuario() {

        let usuario = await UserData();
        setUser(usuario);
        setX(true);
    };

    return (
        <ScrollView style={styles.geral}>

            <View>
                <Perfil
                    fotoUser={require("../../../assets/fazueli.jpg")}
                    nomeUser={"Barnabé"}>
                </Perfil>

                {
                    x ? (

                        <View style={styles.regua}>
                            <CaixaPerfilMotorista veiculo={"Perua sla"}
                                cor={"Cinza"}
                                endereco={FormatadorTexto(user.endereco_motorista, 1, 2)}
                                periodo={"Manhã/Tard"}
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
