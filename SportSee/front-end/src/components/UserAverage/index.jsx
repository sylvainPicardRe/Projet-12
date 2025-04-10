import React, { useEffect, useState } from 'react'
import { fetchUserAverageSessions } from '../../services/api'

import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from 'recharts'

function UserAverage({ userId }) {
  const [userAverage, setUserAverage] = useState(null)
  const [loadig, setLoading] = useState(true)
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUserAverageSessions(userId)
        setUserAverage(userData)
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

  if (!userAverage) {
    return <div>Aucune information utilisateur disponible.</div>
  }

  const dayLabels = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  const formatDay = (tick) => {
    return dayLabels[tick - 1] || ''
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart width={200} height={60} data={userAverage.sessions}>
        <CartesianGrid horizontal={false} vertical={false} fill="#E60000" />
        <XAxis dataKey="day" tickFormatter={formatDay} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  )
}
export default UserAverage
