import axios from 'axios'

export  const login =  async (data) => {
 const response = await axios.post('http://localhost:8000/auth/login', data)
    return response.data

}