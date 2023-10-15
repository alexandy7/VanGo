import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./CriarTurmas.modules";
import NotFound from "../../Componentes/NotFound";
import { TextInput } from "react-native";
import InputCriacao from "../../Componentes/InputCriacao";
import { useFonts, Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import { Token, UserData } from "../../services/Contexts/Contexts";
import ApiMotorista from "../../services/Api/ApiMotorista";
import axios from "axios";

export default function CriarTurmas() {

    const navigation = useNavigation();

    const [nomeTurma, setNomeTurma] = useState("");
    const [periodoTurma, setPeriodoTurma] = useState("");
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        async function buscarUsuario() {

            let usuario = await UserData();
            setUser(usuario);
        };

        buscarUsuario();
    }, [])

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular,
        Montserrat_600SemiBold
    });

    if (!fonteLoaded) {
        return null;
    }


    async function CriarTurma() {

        try {

            if(nomeTurma === "" || periodoTurma === ""){
                console.log("Preencha todos os campos!");
                return;
            }

            setLoading(true);

            let token = await Token();

            let data = {
                Periodo_turma: periodoTurma,
                Nome_turma: nomeTurma,
                Id_motorista_turma: user.id_motorista
            };

            let response = await ApiMotorista.post("CriarTurma", data, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            });

            if (response.status != 200) {
                console.log("Este nome já existe");
                return;
            }

            setLoading(false);
            navigation.navigate("TabBarMotorista")

        }
        catch (error) {
            console.log(error);
            setLoading(false);
            return;
        }
    }
    return (
        <View style={styles.container}>

            <View style={styles.caixaheader}>
                <View style={styles.divseta}>
                    <Ionicons style={styles.seta} name={"chevron-back-outline"} size={50} color="black" />
                </View>

                <View style={styles.divimagem}>
                    <Image style={styles.logo} source={require("../../../assets/Logo.png")} />
                </View>


                {/* essa div é criada para manter a seta no mesmo nível do icone
                sem empurrar a logo */}

                <View style={styles.divregua}>
                    <Text></Text>
                </View>

            </View>

            <View style={styles.divtextos}>
                <Text style={styles.textosuperior}>Crie a sua nova turma</Text>
                <Text style={styles.textoinferior}>Insira as informações abaixo:</Text>
            </View>

            <View style={styles.divinputs}>
                <InputCriacao mudou={(text) => setNomeTurma(text)} icone={"grid"} dado={"Nome da Turma"} />
                <InputCriacao mudou={(text) => setPeriodoTurma(text)} icone={"time-outline"} dado={"Periodo"} />
            </View>

            <View style={styles.divbotoes}>

                <TouchableOpacity style={styles.botaoconcluir} onPress={() => CriarTurma()}>
                    {/* esse espaço vazio é usado para alinhar texto do botão ao meio */}
                    <View style={styles.alinhainicio}>
                        <Text></Text>
                    </View>

                    {
                        loading ? (
                            <View style={styles.alinhameio}>
                            <Text style={styles.textoconcluir}><ActivityIndicator color="white"/></Text>
                        </View>

                        )
                            :
                            (
                                <View style={styles.alinhameio}>
                                    <Text style={styles.textoconcluir}>Criar turma</Text>
                                </View>

                            )
                    }
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.botaovoltar}>
                <View style={styles.alinhainicio}>
                    <Ionicons style={styles.icon} name={"chevron-back-outline"} size={30} color="orange"/>
                </View>

                <View style={styles.alinhameio}>
                    <Text style={styles.textovoltar}>Voltar</Text>
                </View>

                <View style={styles.alinhafim}>
                    <Text></Text>
                </View>
            </TouchableOpacity> */}

            </View>
        </View>
    )

}