import Chart from './Chart'
import styles from './healthCare.module.scss'
import Main from './Main'
import Header from './Header/Header'
import UserManagement from './UserManagement'

const HealthCare = () => {
  return (
    <div>
      <div className={styles.kbWrap}>
        <Header />
        <Main />
        <Chart />
        <UserManagement />
      </div>
    </div>
  )
}

export default HealthCare
