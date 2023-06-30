import axios from 'axios'

export  const getLanguages =  async () => {
 const response = await axios.get('http://localhost:8000/language')
    return response.data

}