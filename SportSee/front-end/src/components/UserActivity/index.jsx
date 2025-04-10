import React, { useEffect, useState } from 'react'
import { fetchUserActivity } from '../../services/api'

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from 'recharts'

function UserActivity({ userId }) {
  const [userActivity, setUserActivity] = useState(null)
  const [loadig, setLoading] = useState(true)
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUserActivity(userId)
        setUserActivity(userData)
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

  if (!userActivity) {
    return <div>Aucune information utilisateur disponible.</div>
  }
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        width={730}
        height={250}
        barSize={10}
        data={userActivity.sessions}
      >
        <CartesianGrid strokeDasharray="2 2" vertical={false} />
        <XAxis />
        <YAxis orientation="right" />
        <Tooltip />
        <Legend verticalAlign="top" align="right" iconType="circle" />

        <Bar dataKey="kilogram" fill="#282D30" />
        <Bar dataKey="calories" fill="#E60000" />
      </BarChart>
    </ResponsiveContainer>
  )
}
export default UserActivity
