import TotalChart from './TotalChart'
import styles from './main.module.scss'
import DATA from '../../../assets/json/response.json'

const USER = DATA.wxcResultMap.paramMap

const Main = () => {
  const { sex, age, resHeight } = USER
  return (
    <>
      <div className={styles.userInfo}>
        <p className={styles.infoTitle}>기본정보</p>
        <div className={styles.infoWrap}>
          <span>{sex === '1' ? '남' : '여'}</span>
          <span>{age}세</span>
          <span>{resHeight}cm</span>
        </div>
      </div>
      <TotalChart />
    </>
  )
}

export default Main
