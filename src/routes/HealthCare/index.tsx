import Chart from './Chart'
import styles from './healthCare.module.scss'
import Main from './Main'
import Header from './Header/Header'
import UserManagement from './UserManagement'
import CircleChart from './Main/CircleChart'

const HealthCare = () => {
  return (
    <div className={styles.kbWrap}>
      <Header />
      <CircleChart />
      <main>
        <Main />
        <Chart />
        <UserManagement />
      </main>
    </div>
  )
}

export default HealthCare
