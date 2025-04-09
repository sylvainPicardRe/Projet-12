import { useParams } from 'react-router'

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  LineChart,
  Line,
} from 'recharts'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import DashboardHeader from '../../components/DashboardHeader'

import '../../styles/Dashboard.scss'

function Dashboard() {
  const { userId } = useParams()

  return (
    <>
      <Header />
      <Sidebar />
      <main className="dashboard">
        <DashboardHeader userId={userId} />
        {/* <header className="dashboard__header"> */}
        {/* <h1 className="dashboard__title">
            Bonjour{' '}
            <span className="user-name">{userData.userInfos.firstName}</span>
          </h1>
        </header>
        <p>{userData.keyData.calorieCount}Cal</p>
        <p>{userData.keyData.proteinCount}g</p>
        <p>{userData.keyData.carbohydrateCount}g</p>
        <p>{userData.keyData.lipidCount}g</p>

        <BarChart
          width={730}
          height={250}
          barSize={10}
          data={activityData.sessions}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey={(index) => index} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#282D30" />
          <Bar dataKey="calories" fill="#E60000" />
        </BarChart>

        <LineChart
          width={730}
          height={250}
          data={averageData.sessions}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid horizontal={false} vertical={false} fill="#E60000" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" />
        </LineChart> */}
      </main>
    </>
  )
}

export default Dashboard
