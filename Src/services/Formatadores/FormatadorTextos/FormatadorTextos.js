
export default function FormatadorTexto(texto, limite, qntdPalavras){

    if(texto.length <= limite){
        return texto;
    }

    else if(qntdPalavras !== undefined){
        let textoSeparado = texto.split(' ');
        return textoSeparado[0] + '...';
    }

    else{
        let textoSeparado = texto.split(' ');

        return textoSeparado[0] + ' ' + textoSeparado[1].slice(0, -3) + '...';   
    }
}
