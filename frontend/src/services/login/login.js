import axios from 'axios'

export const login = async (data) => {
    const body = new URLSearchParams(data)
    const response = await axios.post('http://localhost:8000/auth/login', body)
    localStorage.setItem('acces_token', response.data.accessToken)
    const expirationDate = new Date(new Date().getTime() + (1000 * 60 * 15))
    localStorage.setItem('expires', JSON.stringify(expirationDate.toISOString()))
    return response.data

}