import axios from 'axios'

export  const getUsers =  async () => {
 const response = await axios.get('http://localhost:8000/user/')
    return response.data

}