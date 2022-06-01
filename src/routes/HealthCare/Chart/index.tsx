<<<<<<< HEAD
import TenYearChart from './TenYearChart/TenYearChart'
=======
>>>>>>> develop
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryScatter } from 'victory'

import json from 'assets/json/response.json'
import styles from './chart.module.scss'
import { CallbackArgs } from 'victory-core'

const WHSCORE = json.wxcResultMap.wHscore
const WHSCORYDY = json.wxcResultMap.wHscoreDy.replace(/\[|\]/g, '').split(', ').at(-1)

interface Score {
  indicator: string
  score: number
}

const getIndicatorType = (scoreDifferece: number) => {
  if (scoreDifferece < 0) return 'less'
  if (scoreDifferece > 0) return 'more'
  return 'same'
}

const Chart = () => {
  const chartData: Score[] = [
    { indicator: '나', score: Number(WHSCORE) },
    { indicator: '10년 후', score: Number(WHSCORYDY) },
  ]

  const scoreDifferece = chartData[0].score - chartData[1].score

  // TODO: 색상 hex로
  const comparativeIndicator = {
    less: { text: '낮아요', color: 'red' },
    same: { text: '같아요', color: 'black' },
    more: { text: '높아요', color: 'blue' },
  }[getIndicatorType(scoreDifferece)]

  return (
    <div className={styles.comparativeChart}>
<<<<<<< HEAD
      <TenYearChart />
=======
>>>>>>> develop
      <h1>나의 10년 후 건강 예측</h1>
      <div className={styles.descripton}>
        <div>10년 후 예상 건강점수는</div>
        {scoreDifferece === 0 && <div>현재와 같아요.</div>}
        {scoreDifferece !== 0 && (
          <div>
            현재보다{' '}
            <mark>
              {scoreDifferece}점 {comparativeIndicator.text}
            </mark>
          </div>
        )}
      </div>
      <VictoryChart>
        <VictoryAxis
          tickValues={chartData.map((el) => el.indicator)}
          style={{ axis: { display: 'none' }, tickLabels: { fontWeight: 700, fill: 'pink' } }}
          domain={{ x: [0, 3] }}
        />
        <VictoryBar
          data={chartData}
          x='indicator'
          y='score'
          labels={({ datum }) => `${datum.score}점`}
          style={{
            data: { fill: ({ datum }) => (datum.indicator === '나' ? '#F9D548' : '#EF8A4E') },
            labels: {
              fill: ({ datum }: CallbackArgs) => (datum.indicator === '나' ? '#F9D548' : '#EF8A4E'),
            },
          }}
        />
        <VictoryLine data={chartData} x='indicator' y='score' />
        <VictoryScatter
          data={chartData}
          x='indicator'
          y='score'
          style={{
            data: {
              fill: ({ datum }) => (datum.indicator === '나' ? 'pink' : 'gold'),
              stroke: ({ datum }) => (datum.indicator === '나' ? 'red' : 'orange'),
              fillOpacity: 0.7,
              strokeWidth: 2,
            },
          }}
          size={6}
        />
      </VictoryChart>
    </div>
  )
}

export default Chart
