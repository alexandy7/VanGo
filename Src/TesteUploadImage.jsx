import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Button, Image, Text, TextInput, View } from 'react-native';
import axios from 'axios';

export default function ImageSelector() {

    const [name, setName] = useState("");
    const [base64, setBase64] = useState("");

    async function selecionarImagem() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5,
            aspect: [3, 3],
            allowsEditing: true,
            base64: true
        });

        if (result.canceled) {
            return;
        }
        setBase64(result.assets[0].uri);
    }

    async function Cadastrar() {

        try {
            const body = {
                Email_cliente: "email",
                Senha_cliente: "senha",
                Nome_cliente: "nome",
                Base64: base64,
                Cpf_responsavel: "cpf",
                Endereco_cliente: "endereco",
                Responsavel_cliente: "nomeOuHorario",
                Escola_cliente: "aaaa"
            };

            // navigation.navigate('CadastroEscola');
            const resposta = await axios.post('https://localhost:7149/api/Cliente/CadastrarCliente', body);

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
        <View>
            <TextInput
                placeholder='Digite o nome'
                value={name}
                onChangeText={(texto) => setName(texto)}
            />
            <Button title="Selecione a imagem" onPress={selecionarImagem} />
            <Image source={{ uri: base64 }} style={{ width: 200, height: 200 }} />

            <Button title="Cadastrar" onPress={Cadastrar} />
        </View>
    )
}