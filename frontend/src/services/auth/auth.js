import axios from 'axios'

export  const register =  async (data) => {
    delete data.confirm_usr_password
 const response = await axios.post('http://localhost:8000/auth/register', data)
    return response.data

}