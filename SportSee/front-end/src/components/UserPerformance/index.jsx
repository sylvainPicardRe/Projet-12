import React, { useEffect, useState } from 'react'
import { fetchUserPerformance } from '../../services/api'

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts'

function UserPerformance({ userId }) {
  const [UserPerformance, setUserPerformance] = useState(null)
  const [loadig, setLoading] = useState(true)
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUserPerformance(userId)
        setUserPerformance(userData)
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

  if (!UserPerformance) {
    return <div>Aucune information utilisateur disponible.</div>
  }

  const kindMap = new Map(
    Object.entries(UserPerformance.kind).map(([key, value]) => [
      parseInt(key),
      value,
    ]),
  )
  const performance = UserPerformance.data.map((item) => ({
    kind: kindMap.get(item.kind),
    value: item.value,
  }))
  const reformattedData = { userId: UserPerformance.userId, performance }

  const kindTranslations = {
    cardio: 'Cardio',
    energy: 'Energie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité',
  }

  const formatKind = (kind) => {
    return kindTranslations[kind] || kind
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart
        outerRadius={90}
        width={730}
        height={250}
        data={reformattedData.performance}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" tickFormatter={formatKind} />
        <Radar name="kind" dataKey="value" />
      </RadarChart>
    </ResponsiveContainer>
  )
}
export default UserPerformance
