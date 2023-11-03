import React, { useEffect, useRef, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useFonts, Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import styles from "./CadastroTela1.modules";
import BotaoGeral from "../../Componentes/BotaoGeral";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';

export default function CadastroTela1() {

    const navigation = useNavigation();

    const [fundoAndTextoResp, setFundoAndTextoResp] = useState('white');
    const [buttonResponsavel, setButtonResponsavel] = useState('#F99A4C');
    const [fundoAndTextMoto, setFundoAndTextMoto] = useState('white');
    const [buttonMoto, setButtonMoto] = useState('#F99A4C');

    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular,
        Montserrat_600SemiBold
    });

    const animatableRefMoto = useRef(null);
    const animatableRefClient = useRef(null);

    const handlePressInMoto = () => {
        if (animatableRefMoto.current) {
            animatableRefMoto.current.bounceIn(800);
        }
    };

    const handlePressInClient = () => {
        if (animatableRefClient.current) {
            animatableRefClient.current.bounceIn(800);
        }
    };


    if (!fonteLoaded) {
        return null;
    }

    return (
        <View style={styles.main}>
            <View style={styles.caixaheader}>
                <TouchableOpacity style={styles.divseta} onPress={()=>{navigation.goBack()}}>
                    <Ionicons style={styles.seta} name={"chevron-back-outline"} size={40} color="#dbdbdb" />
                </TouchableOpacity>

                <View style={styles.divimagem}>
                    <Image style={styles.logo} source={require("../../../assets/Logo.png")} />
                </View>

                <View style={styles.divregua}>
                    <Text></Text>
                </View>
            </View>

            <View style={styles.divtextos}>
                <Text style={styles.textosuperior}>Quem é você?</Text>
                <Text style={styles.textoinferior}>Selecione uma das opções abaixo:</Text>
            </View>

            <View style={styles.reguaopcoes}>

                <Animatable.View style={[styles.caixaopcao, { backgroundColor: fundoAndTextMoto }]} ref={animatableRefMoto}>
                    <TouchableOpacity activeOpacity={1} onPressIn={() => {
                        handlePressInMoto();
                        if (buttonMoto === 'white') {
                            setFundoAndTextMoto('white');
                            setButtonMoto('#F99A4C');
                            return;
                        };
                        if (buttonResponsavel === 'white') {
                            setButtonResponsavel('#F99A4C');
                            setFundoAndTextoResp('white')
                        };
                        setFundoAndTextMoto('#F99A4C');
                        setButtonMoto('white');
                    }}>
                        <Image style={styles.imagem} source={require("../../../assets/volante.png")} />
                        <View style={[styles.botao, { backgroundColor: buttonMoto }]}>
                            <Text style={[styles.textobotao, { color: fundoAndTextMoto }]}>Motorista</Text>
                        </View>
                    </TouchableOpacity>
                </Animatable.View>

                <Animatable.View style={[styles.caixaopcao, { backgroundColor: fundoAndTextoResp }]} ref={animatableRefClient}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPressIn={() => {
                            handlePressInClient();
                            if (buttonResponsavel === 'white') {
                                setButtonResponsavel('#F99A4C');
                                setFundoAndTextoResp('white')
                                return;
                            };
                            if (buttonMoto === 'white') {
                                setFundoAndTextMoto('white');
                                setButtonMoto('#F99A4C')
                            };
                            setFundoAndTextoResp('#F99A4C')
                            setButtonResponsavel('white')
                        }}>
                        <Image style={styles.imagem} source={require("../../../assets/mamae.png")} />
                        <View style={[styles.botao, { backgroundColor: buttonResponsavel }]}>
                            <Text style={[styles.textobotao, { color: fundoAndTextoResp }]}>Responsável</Text>
                        </View>
                    </TouchableOpacity>
                </Animatable.View>
            </View>

            <BotaoGeral texto={"Prosseguir"} icone={"chevron-forward-outline"} evento={() => {
                if (buttonResponsavel === 'white') {
                    navigation.navigate('CadastroCliente');
                    return;
                }

                navigation.navigate('CadastroMotorista');
            }} />
        </View>
    )
}