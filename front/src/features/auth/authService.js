import axios from "axios"

const login = async(userData) => {
    const response = await axios.post("http://localhost:3001/api/v1/user/login", userData)
    if(response.data){
        localStorage.setItem("userLogin",JSON.stringify(response.data))
    }
    return response.data 
}

const authService = {login}

export default authService
