import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Importando para usar o Tab Bar
import { View, Text } from "react-native";
import RecuperarSenha from "../../Pages/RecuperarSenha/RecuperarSenha";

export default function MenuBar(){

 const tab = createBottomTabNavigator();
    return(
        <View>
            <tab.Navigator>
                <tab.Screen name="RecuperarSenha" component={RecuperarSenha}>
                  
                </tab.Screen>
            </tab.Navigator>
        </View>
    )
}