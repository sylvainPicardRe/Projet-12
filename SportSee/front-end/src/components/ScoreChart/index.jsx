import React, { useEffect, useState } from 'react'
import { fetchUserById } from '../../services/api'
import {
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts'

function ScoreChart({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

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

  if (loading) {
    return <div>Chargement des données...</div>
  }

  if (!user) {
    return <div>Aucune information utilisateur disponible.</div>
  }

  const data = [{ name: 'score', value: user.score * 100 }]

  return (
    <div className="chart-card">
      <h3 className="chart__title">Score</h3>
      <ResponsiveContainer width="100%" aspect={2}>
        <RadialBarChart
          innerRadius="80%"
          outerRadius="100%"
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="value" fill="#ff0000" />
          <circle cx="50%" cy="50%" r="22%" fill="#fff" />
          <foreignObject x="35%" y="35%" width="30%" height="30%">
            <div className="score">
              <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                {data[0].value}%
              </p>
              <p style={{ fontSize: '12px', color: '#74798C' }}>
                de votre objectif
              </p>
            </div>
          </foreignObject>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ScoreChart
