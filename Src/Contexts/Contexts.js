import { useNavigation } from "@react-navigation/native";
import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [user, setUser] = useState({});
    const navigation = useNavigation();

    async function Consulta({ data }) {


        try {
            const response = await axios.get(`https://apivango.azurewebsites.net/api/Auth/LoginCliente?email=${data.email}&senha=${data.senha}`);

            if (response.status == 200) {

                setUser(response.data)
                

                navigation.navigate('SolicitacaoTurma');
                return;
            }
        }

        catch (error) {
            console.error('Erro na consulta:', error);
        }
    }


    return (

        <AuthContext.Provider value={{ user, Consulta }}>
            {children}
        </AuthContext.Provider>

    )

};

export default AuthProvider;