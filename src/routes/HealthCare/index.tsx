import Chart from './Chart'
import styles from './healthCare.module.scss'
import Main from './Main'
import Header from './Header/Header'
import UserManagement from './UserManagement'

import TotalChart from './Main/TotalChart'

const HealthCare = () => {
  return (
    <div>
      {/* <Chart /> */}
      {/* <UserManagement /> */}
    <div className={styles.kbWrap}>
      <Header />
      <Main />
      <UserManagement />

    </div>
  )
}

export default HealthCare
