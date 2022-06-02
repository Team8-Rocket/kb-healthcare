import { VictoryAnimation, VictoryLabel, VictoryPie } from 'victory'
import { InfoIcon } from 'assets/svgs/index'
import styles from './circleChart.module.scss'
import { useEffect, useState } from 'react'
import DATA from '../../../assets/json/response.json'
import { useMounted } from 'hooks'
import dayjs from 'dayjs'

const USER_INFO = DATA.userInfo

const CircleChart = () => {
  const [yPercent, setYPercent] = useState<number>(0)
  //    "healthScore": "875",  >> 87.5 >> 87.0 %
  useEffect(() => {
    const percent = (Number(USER_INFO.healthScore) / 1000) * 100
    setYPercent(Math.floor(percent))
  }, [])

  return (
    <div className={styles.headerContents}>
      <div className={styles.chartTitle}>
        <h2>김국민님의 건강점수</h2>
        <InfoIcon />
      </div>
      <article className={styles.chart}>
        <VictoryPie
          startAngle={-120}
          endAngle={120}
          height={280}
          colorScale={['gold', '#eee']}
          innerRadius={75}
          animate={{ duration: 1000 }}
          data={[
            { x: 1, y: yPercent, label: ' ' },
            { x: 2, y: 100 - yPercent, label: ' ' },
          ]}
        />

        <p className={styles.score}>
          {USER_INFO.healthScore}
          <span> 점</span>
        </p>
      </article>
      <div className={styles.chartResult}>
        <p className={styles.date}>{dayjs(USER_INFO.healthDate).format('YYYY.MM.DD')}</p>
        <p>건강검진결과 가져오기 &gt; </p>
      </div>
    </div>
  )
}
export default CircleChart
