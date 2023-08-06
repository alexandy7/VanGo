import axios from "axios"; //axios é quem envia as requisições

const Api = axios.create({
    baseURL: 'https://vango.azurewebsites.net/api/vango/' //Local do meu servidor. Nesse caso estou usando eu localHost
});

export default Api;

