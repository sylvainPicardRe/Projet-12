import axios from 'axios'
import mockedData from '../data/mock'

const API_BASE_URL = 'http://localhost:3000'
const useMockData = import.meta.env.VITE_USE_MOCK_DATA === 'true'

export const fetchUserById = async (userId) => {
  if (useMockData) {
    const userData = mockedData.USER_MAIN_DATA.find(
      (user) => user.id === parseInt(userId),
    )
    if (userData) {
      return userData
    } else {
      throw new Error(
        `Aucune donnée mockée trouvée pour l'utilisateur avec l'ID ${userId}`,
      )
    }
  }
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
  if (useMockData) {
    const userData = mockedData.USER_ACTIVITY.find(
      (user) => user.userId === parseInt(userId),
    )
    if (userData) {
      return userData
    } else {
      throw new Error(
        `Aucune donnée mockée trouvée pour l'utilisateur avec l'ID ${userId}`,
      )
    }
  }
  try {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}/activity`)
    const { data } = response
    const { data: nesteData } = data
    return nesteData
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de l'activité de l'utilisateur avec l'ID${userId} :`,
      error,
    )
    throw error
  }
}

export const fetchUserAverageSessions = async (userId) => {
  if (useMockData) {
    const userData = mockedData.USER_AVERAGE_SESSIONS.find(
      (user) => user.userId === parseInt(userId),
    )
    if (userData) {
      return userData
    } else {
      throw new Error(
        `Aucune donnée mockée trouvée pour l'utilisateur avec l'ID ${userId}`,
      )
    }
  }
  try {
    const response = await axios.get(
      `${API_BASE_URL}/user/${userId}/average-sessions`,
    )
    const { data } = response
    const { data: nesteData } = data
    return nesteData
  } catch (error) {
    console.error(
      `Erreur lors de la récupération des sessions moyennes de l'utilisateur avec l'ID${userId} :`,
      error,
    )
    throw error
  }
}

export const fetchUserPerformance = async (userId) => {
  if (useMockData) {
    const userData = mockedData.USER_PERFORMANCE.find(
      (user) => user.userId === parseInt(userId),
    )
    if (userData) {
      return userData
    } else {
      throw new Error(
        `Aucune donnée mockée trouvée pour l'utilisateur avec l'ID ${userId}`,
      )
    }
  }
  try {
    const response = await axios.get(
      `${API_BASE_URL}/user/${userId}/performance`,
    )
    const { data } = response
    const { data: nesteData } = data
    return nesteData
  } catch (error) {
    console.error(
      `Erreur lors de la récupération des sessions moyennes de l'utilisateur avec l'ID${userId} :`,
      error,
    )
    return mockedData
  }
}
