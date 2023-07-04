import axios from "axios"

const login = async(userData) => {
    const response = await axios.post("http://localhost:3001/api/v1/user/login", userData)
    if(response.data){
        localStorage.setItem("userLogin",JSON.stringify(response.data))
    }
    return response.data 
}

const logout = () => {
    localStorage.removeItem("userLogin")
}

const getUserInfos = async(token) => {
    const response = await axios.post("http://localhost:3001/api/v1/user/profile",{}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data 
}

const putUserInfos = async(data) => {
    console.log(data);
    const response = await axios.put("http://localhost:3001/api/v1/user/profile", data.user, {
        headers: {
            Authorization: `Bearer ${data.token}`
        }
    })
    return response.data 
}

const authService = {login, logout, getUserInfos, putUserInfos}

export default authService
