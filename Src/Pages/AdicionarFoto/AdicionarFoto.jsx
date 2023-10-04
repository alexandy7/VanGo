import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import styles from "./AdicionarFoto.modules";
import NotFound from "../../Componentes/NotFound";
import { useFonts, Montserrat_500Medium, Montserrat_400Regular } from "@expo-google-fonts/montserrat"
import * as ImagePicker from 'expo-image-picker';

export default function AdcionarFoto() {

    const navigation = useNavigation();

    const [base64, setBase64] = useState(null);
    const [foto, setFoto] = useState(false);
    const [fonteLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular
    });

    if (!fonteLoaded) {
        return null;
    }

    
  async function selecionarImagem() {
    try {

      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
        aspect: [4, 4],
        allowsEditing: true,
        base64: true
      });

      if (result.canceled) {
        return;
      }
      setBase64(result.assets[0].uri);
      setFoto(true);

    }
    catch (error) {
      console.log(error)
    }
  }

  async function CadastrarCliente() {

    setLoading(true);
    

      try {
        // navigation.navigate('CadastroEscola');
        const resposta = await axios.post('https://localhost:7149/api/Cliente/CadastrarCliente', {
          Email_cliente: email,
          Senha_cliente: senha,
          Nome_cliente: nome,
          Base64: base64,
          Cpf_responsavel: cpf,
          Endereco_cliente: endereco,
          Responsavel_cliente: nomeOuHorario,
        });


        if (resposta != null) {
          navigation.navigate('Login');
        } else {
          console.log('Usuário não encontrado');
        }
      }

      catch (error) {
        console.error('Erro na consulta:', error);
      }
    }
    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <View style={styles.divesquerda}>
                    <TouchableOpacity style={styles.seta} onPress={() => { navigation.goBack() }}>
                        <Ionicons name="chevron-back-outline" size={35} color={"gray"}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.divmeio}>
            
                </View>

                <View style={styles.divdireita}>

                </View>

            </View>

            <View style={styles.divdados}>
                <View style={styles.divimagem}>
                    <Image style={styles.imagem} source={require("../../../assets/Logo.png")}/>
                </View>

                <View style={styles.divtexto}>
                    <Text style={styles.texto1}>Adicione sua foto de perfil</Text>
                    <Text style={styles.texto2}>Insira as informações abaixo</Text>
                </View>
            </View>

                {
                    foto ? (
                        <TouchableOpacity onPress={()=> selecionarImagem()}>
                        <Image source={{ uri: base64 }} style={styles.foto} />
                        </TouchableOpacity>
                    )
                    :
                    (
                        <TouchableOpacity style={styles.containerfoto} onPress={()=> selecionarImagem()}>
                        <Ionicons name="camera-outline" size={55} color={"#F7770D"}/>
                        </TouchableOpacity>
                    )
                }

            <TouchableOpacity style={styles.botaoconcluir}>
                <View style={styles.alinhainicio}>
                    <Text></Text>
                </View>

                <View style={styles.alinhameio}>
                    <Text style={styles.textoconcluir}>Concluir</Text>
                </View>

                <View style={styles.alinhafim}>
                    <Ionicons style={styles.icon} name={"chevron-forward-outline"} size={30} color="white"/>
                </View>
            </TouchableOpacity>
            
        </View>
    )

}