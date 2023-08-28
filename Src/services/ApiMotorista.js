import axios from "axios";

const ApiMotorista = axios.create({
    baseURL: 'https://localhost:7149/api/Motorista/'
})

export default ApiMotorista;