import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"; //Armazena infos no dispositivo
import jwt from "jwt-decode";

export default async function jwtCode(jwtData){
    const infoUser = jwt(jwtData)

    await AsyncStorage.setItem("@jwt", infoUser);
    await AsyncStorage.setItem("@infoUser", JSON.stringify(infoUser)) //Convertendo para string pois o AsyncStorage só     
                                                                     // suporta este tipo
}

export default async function VerificarLogin(){
    const infoUser = await AsyncStorage.getItem("@jwt")

    if (infoUser == null){

        return false;
    }

    else{
        
    }

}