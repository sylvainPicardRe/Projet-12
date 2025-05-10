import { useParams } from 'react-router'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import DashboardHeader from '../../components/DashboardHeader'
import UserActivity from '../../components/UserActivity'
import AverageChart from '../../components/AverageChart'
import PerformanceChart from '../../components/PerformanceChart'
import ScoreChart from '../../components/ScoreChart'
import UserAside from '../../components/UserActivityState'

import '../../styles/Dashboard.scss'

function Dashboard() {
  const { userId } = useParams()

  return (
    <>
      <Sidebar />
      <Header />
      <main className="dashboard">
        <DashboardHeader userId={userId} />
        <section>
          <div className="charts-wrapper">
            <UserActivity userId={userId} />

            <div className="dashboard-grid">
              <AverageChart userId={userId} />
              <PerformanceChart userId={userId} />
              <ScoreChart userId={userId} />
            </div>
          </div>
          <UserAside userId={userId} />
        </section>
        {/*<div className="dashboard__datas">
            <div className="charts-wrapper__principal">
          <section className="charts-wrapper">
            </div>
            <div className="charts-wrapper__additional">
            </div>
          </section>
        </div>{' '}
        */}
      </main>
    </>
  )
}

export default Dashboard
