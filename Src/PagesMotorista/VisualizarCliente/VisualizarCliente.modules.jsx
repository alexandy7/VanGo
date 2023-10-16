import { StyleSheet } from "react-native"

const styles = StyleSheet.create(
    {   
        geral: {
            flex: 1
        },
        
        regua: {
            height: 400,
            position: "relative",
            bottom: 80
        },

        geral2:{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "white",
            alignSelf: "center",
            borderRadius: 15,
            width: "85%",
            bottom: 60,
            elevation: 10,

        },

        cima:{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
        },

        baixo:{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"

        },

        pincel:{
            position: "relative",
            alignSelf: "flex-end",
            right: "5%",
            bottom: 10
        },
    
    }
)

export default styles;