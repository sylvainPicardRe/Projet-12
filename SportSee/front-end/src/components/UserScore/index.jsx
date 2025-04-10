import React, { useEffect, useState } from 'react'
import { fetchUserById } from '../../services/api'

import { ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts'

function UserScore({ userId }) {
  const [user, setUser] = useState(null)
  const [loadig, setLoading] = useState(true)
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUserById(userId)
        const normalizedUserData = {
          ...userData,
          score:
            userData.todayScore !== undefined
              ? userData.todayScore
              : userData.score,
        }
        setUser(normalizedUserData)
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

  console.log(user.score)

  const data = [
    { name: 'score', value: user.score * 100 },
    { name: 'Reste', value: (1 - user.score) * 100 },
  ]

  const COLORS = ['#E60000', '#fff']

  return (
    <ResponsiveContainer width={1024} height={300}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={120}
          cy={120}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey={'value'}
          startAngle={180}
          endAngle={-360}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label
            value={`${data[0].value}%`}
            position="center"
            fontSize="24px"
            fontWeight="bold"
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default UserScore
