import axios from "axios"

const login = async(userData) => {
    const response = await axios.post("http://localhost:3001/api/v1/user/login", userData)
    return response.data 
}

export default authService
