import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from "react-native";
import { useFonts, Montserrat_500Medium, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_300Light } from "@expo-google-fonts/montserrat"
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function ChatGpt() {

  const navigation = useNavigation();

  const [fonteLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_300Light
  });

  const [envio, setEnvio] = useState("");
  const [retorno, setRetorno] = useState("");



  const chaveApi = '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';

  const prompt = 'Quem era o presidente do brasil em 2015?';

  async function enviarRequisicao() {
    try {
      const resposta = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${chaveApi}`
        },
        body: JSON.stringify({
          prompt: prompt,
        })
      });

      if (resposta.ok) {
        const dados = await resposta.json();
        console.log('Resposta do ChatGPT:', dados.choices[0].text);
        setRetorno(dados.choices[0].text);
      } else {
        console.error('Erro ao enviar a requisição:', resposta.status, resposta.statusText);
      }
    } catch (erro) {
      console.error('Erro ao processar a requisição:', erro);
    }
  }


  if (!fonteLoaded) {
    return null;
  };

  return (
    <View >
      <TextInput></TextInput>
      <Text>{retorno}</Text>
      <TouchableOpacity style={{ backgroundColor: "black", width: 100, height: 30 }} onPress={() => { enviarRequisicao() }}></TouchableOpacity>

    </View>
  )

}