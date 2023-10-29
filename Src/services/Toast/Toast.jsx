import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

export default function showToast(tipo, titulo, mensagem, tempo) {

      
    Toast.show({
        type: tipo,
        text1: titulo,
        text2: mensagem,
        visibilityTime: tempo,
    });
}