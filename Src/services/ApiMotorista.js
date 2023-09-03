import axios from "axios";

const ApiMotorista = axios.create({
    baseURL: 'https://apivango.azurewebsites.net/api/motorista/'
})

export default ApiMotorista;