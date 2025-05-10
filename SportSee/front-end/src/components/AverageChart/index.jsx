import React, { useEffect, useState } from 'react'
import { fetchUserAverageSessions } from '../../services/api'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from 'recharts'

function AverageChart({ userId }) {
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

  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  const formatDay = (tick) => {
    return days[tick - 1] || ''
  }

  const CustomCursor = (props) => {
    const { points, width, height } = props
    const { x, y } = points[0]
    return (
      <Rectangle
        fill="#E60000"
        opacity="0.5"
        x={x}
        y={y}
        width={width}
        height={height}
      />
    )
  }

  return (
    <div className="line-chart">
      <h2 className="chart__title">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart data={userAverage.sessions}>
          <CartesianGrid
            strokeDasharray="2 2"
            horizontal={false}
            vertical={false}
          />
          <XAxis dataKey="day" tickFormatter={formatDay} stroke="#fff" />
          <Tooltip
            labelStyle={{ display: 'none' }}
            itemStyle={{ color: 'black', margin: '0' }}
            formatter={(value) => [`${value} min`]}
            cursor={<CustomCursor />}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            dot={false}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
export default AverageChart
