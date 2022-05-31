import styles from './healthCare.module.scss'
import Main from './Main'
import Header from './Header/Header'

import TotalChart from './Main/TotalChart'

const HealthCare = () => {
  return (
    <div className={styles.kbWrap}>
      <Header />
      <Main />
    </div>
  )
}

export default HealthCare
