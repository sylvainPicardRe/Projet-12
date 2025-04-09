import axios from 'axios'

const API_BASE_URL = 'http://localhost:3000'

export const fetchUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}`)
    const { data } = response
    const { data: nesteData } = data
    return nesteData
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de l'utilisateur avec l'ID${userId} :`,
      error,
    )
    throw error
  }
}

export const fetchUserActivity = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}/activity`)
    return response.data
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de l'activité de l'utilisateur avec l'ID${userId} :`,
      error,
    )
    throw error
  }
}

export const fetchUserAverageSessions = async (userId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/user/${userId}/average-sessions`,
    )
    return response.data
  } catch (error) {
    console.error(
      `Erreur lors de la récupération des sessions moyennes de l'utilisateur avec l'ID${userId} :`,
      error,
    )
    throw error
  }
}
