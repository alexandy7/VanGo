import { useNavigation } from "@react-navigation/native";
import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [user, setUser] = useState({});
    const navigation = useNavigation();

    async function Consulta({ data }) {

        try {
            const response = await axios.get(`https://apivango.azurewebsites.net/api/Auth/Login?email=${data.email}&senha=${data.senha}`);

            if (response.status == 200) {
                setUser(response.data)

                Navegacao(response.data);
            }

        }
        
        catch (error) {
            console.error('Erro na consulta:', error)
        }

    }

    // Verifica quem fez login e direciona para a page certa
    function Navegacao(userData){

        if(userData.id_cliente !== undefined){
            navigation.navigate('SolicitarTurma')
        }

        if(userData.email_motorista !== undefined){
            navigation.navigate('SolicitacoesTurmaMotorista')
        }
    };

    return (
        
        <AuthContext.Provider value={{ user, Consulta }}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProvider;