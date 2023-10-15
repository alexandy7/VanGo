import { useNavigation } from "@react-navigation/native";
import React, { createContext, useState } from "react";
import jwt from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";


export async function GuardarToken(jwtData) {
    
    const userData = jwt(jwtData);
    
    await AsyncStorage.setItem("@jwt", jwtData);
    await AsyncStorage.setItem("@userData", JSON.stringify(userData));
    
};


export async function VerificarLogin() {

    const token = await AsyncStorage.getItem("@jwt");
    if (!token) {
        return false;
    };

    const user = JSON.parse(await AsyncStorage.getItem("@userData"));

    let date = new Date();
    let nowDate = date.getDate();

    if(nowDate > user.exp){
        RemoverToken();
        return;
    };

    return user;
};


export async  function UserData(){

   return JSON.parse(await AsyncStorage.getItem("@userData"))

};


export async function Token(){

    const token = await AsyncStorage.getItem("@jwt")

    return token;
}


export async function RemoverToken(){
    await AsyncStorage.removeItem("@jwt")
}

// Verifica quem fez login e direciona para a pagina certa.
// function Navegacao(userData) {

//     if (userData.id_cliente !== undefined) {
//         if (userData.turma_cliente !== null) {

//             navigation.navigate('TabBarCliente')
//             return;
//         }
//         navigation.navigate('SolicitarTurma')
//         return;
//     }

//     if (userData.email_motorista !== undefined) {
//         navigation.navigate('SolicitacoesTurmaMotorista')
//         return;
//     }
// };





