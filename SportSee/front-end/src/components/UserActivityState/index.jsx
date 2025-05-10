import React, { useEffect, useState } from 'react'
import { fetchUserById } from '../../services/api'

import calories from '../../assets/calories-icon.png'
import proteines from '../../assets/protein-icon.png'
import glucides from '../../assets/carbs-icon.png'
import lipides from '../../assets/fat-icon.png'

import UserNutrient from '../UserNutrient'

function UserActivityState({ userId }) {
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

  const nutrients = [
    {
      name: 'Calories',
      value: user.keyData.calorieCount,
      unit: 'kCal',
      icon: calories,
    },
    {
      name: 'Protéines',
      value: user.keyData.proteinCount,
      unit: 'g',
      icon: proteines,
    },
    {
      name: 'Glucides',
      value: user.keyData.carbohydrateCount,
      unit: 'g',
      icon: glucides,
    },
    {
      name: 'Lipides',
      value: user.keyData.lipidCount,
      unit: 'g',
      icon: lipides,
    },
  ]

  return (
    <div className="nutrients-wrapper">
      {nutrients.map((nutrient, index) => (
        <UserNutrient key={index} nutrient={nutrient} />
      ))}
    </div>
  )
}
export default UserActivityState
