import React, { useEffect, useState } from 'react'
import { fetchUserById } from '../../services/api'

function DashboardHeader({ userId }) {
  const [user, setUser] = useState(null)
  const [loadig, setLoading] = useState(true)
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUserById(userId)
        setUser(userData)
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de l'utilisateur :",
          error,
        )
      } finally {
        setLoading(false)
      }
    }
    if (userId) {
      getUserData()
    }
  }, [userId])

  if (loadig) {
    return <div>Chargment des données...</div>
  }

  if (!user) {
    return <div>Aucune information utilisateur disponible.</div>
  }
  return (
    <header className="dashboard__header">
      <h1 className="dashboard__title">
        Bonjour, <span className="user-name">{user.userInfos.firstName}</span>
      </h1>
    </header>
  )
}

export default DashboardHeader
