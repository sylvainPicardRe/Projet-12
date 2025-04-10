import { useParams } from 'react-router'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import DashboardHeader from '../../components/DashboardHeader'
import UserActivity from '../../components/UserActivity'
import UserAverage from '../../components/UserAverage'
import UserPerformance from '../../components/UserPerformance'

import '../../styles/Dashboard.scss'
import UserScore from '../../components/UserScore'

function Dashboard() {
  const { userId } = useParams()

  return (
    <>
      <Sidebar />
      <Header />
      <main className="dashboard">
        <DashboardHeader userId={userId} />
        <section className="dashboard__datas">
          <div className="charts-wrapper">
            {/* <UserActivity userId={userId} />
            <UserAverage userId={userId} />
            <UserPerformance userId={userId} />
            <UserScore userId={userId} /> */}
          </div>
        </section>

        {/*<p>{userData.keyData.calorieCount}Cal</p>
        <p>{userData.keyData.proteinCount}g</p>
        <p>{userData.keyData.carbohydrateCount}g</p>
        <p>{userData.keyData.lipidCount}g</p>
*/}
      </main>
    </>
  )
}

export default Dashboard
