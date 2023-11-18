import axios from "axios"; //axios é quem envia as requisições

const ApiCliente = axios.create({
    baseURL: 'https://apivango.azurewebsites.net/api/Cliente/' //Local do meu servidor.
});

export default ApiCliente;

