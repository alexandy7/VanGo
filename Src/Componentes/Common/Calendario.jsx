import react, {useState} from "react"
import { Modal, TouchableOpacity } from "react-native"
import { Calendar } from "react-native-calendars";
import { View, Text } from "react-native-web"


// o diabo do video de um indiano explicando como essa bomba funciona 
// https://www.youtube.com/watch?v=NHjqwWHqt8s
//pqp q odio q eu fiquei com isso vsfd


const calendario = () => {
    const [showModal, setShowModal] = useState(false);

    return(
        <View>
            <TouchableOpacity 
            onPress={() => setShowModal(true)} 
            style={{
                backgroundColor:"black", 
                borderRadius: 10, 
                margin:40, 
                padding: 10, 
                width: 200,
                alignItens:"center"
                }}>
                <Text style={{color:"white", fontSize: 22}}>Mostrar calendario</Text>
            </TouchableOpacity>
            <Modal visible={showModal} animationType="fade">
                <Calendar style={{borderRadius:10, elevation:4}}/>
            </Modal>
        </View>
    );
};



export default calendario;