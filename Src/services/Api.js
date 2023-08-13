import axios from "axios"; //axios é quem envia as requisições

const Api = axios.create({
    baseURL: 'https://localhost:7149/api/Cliente/' //Local do meu servidor. Nesse caso estou usando eu localHost
});

export default Api;

