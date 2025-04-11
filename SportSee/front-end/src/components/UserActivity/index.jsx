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
  Text,
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
    <ResponsiveContainer
      width="100%"
      height={250}
      style={{ backgroundColor: '#fbfbfb' }}
    >
      <BarChart
        barSize={10}
        data={userActivity.sessions}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <text x={20} y={30} fontSize="16" fontWeight="bold" fill="#000">
          Activité quotidienne
        </text>
        <CartesianGrid strokeDasharray="2 2" vertical={false} />
        <XAxis />
        <YAxis orientation="right" />
        <Tooltip
          labelStyle={{ display: 'none' }}
          itemStyle={{ color: 'white', margin: '2rem 0' }}
          contentStyle={{
            background: '#E60000',
            padding: '0 1rem',
          }}
          formatter={(value, name) => {
            if (name === 'kilogram') {
              return [`${value} kg`]
            } else if (name === 'calories') {
              return [`${value} Kcal`]
            }
            return [name, value]
          }}
        />
        <Legend
          verticalAlign="top"
          align="right"
          wrapperStyle={{ paddingBottom: 40, paddingRight: 20 }}
          iconType="circle"
          formatter={(value) => {
            switch (value) {
              case 'kilogram':
                return <span style={{ color: 'grey' }}>Poids (kg)</span>
              case 'calories':
                return (
                  <span style={{ color: 'grey' }}>Calories brûlées (kCal)</span>
                )
              default:
                return <span style={{ color: 'red' }}>Erreur</span>
            }
          }}
        />

        <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
        <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
export default UserActivity
