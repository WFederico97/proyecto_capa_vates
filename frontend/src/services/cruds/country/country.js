import axios from 'axios'

export  const getCountries =  async () => {
 const response = await axios.get('http://localhost:8000/country')
    return response.data

}