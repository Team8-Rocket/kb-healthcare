import { useState, useEffect } from 'react'
import { VictoryAxis, VictoryChart, VictoryBar, VictoryLine, VictoryScatter, VictoryGroup } from 'victory'
import styles from './totalChart.module.scss'
import DATAJSON from '../../../assets/json/response.json'
import dayjs from 'dayjs'
import { CallbackArgs } from 'victory-core'

interface IData {
  SCORE: string
  TYPE_CD: string
  SUBMIT_DATE: string
  CNTNS: string
}

interface IScore {
  x: string
  y: number
}

const colors = {
  border: '#a9a9a9',
  yellow: '#ffd300',
  active: '#ff612d',
  bar: '#e7e7e7',
}

const HEALTH_SCORE_LIST = DATAJSON.healthScoreList

const TotalChart = () => {
  const [score, setScore] = useState(0)
  const [message, setMessage] = useState('')
  const [healthScore, setHealthScore] = useState<IScore[]>()

  useEffect(() => {
    const data = HEALTH_SCORE_LIST.map((item: IData) => {
      return { x: dayjs(item.SUBMIT_DATE).format('YYYY'), y: Number(item.SCORE) }
    })
    setHealthScore(data)
  }, [])
  useEffect(() => {
    if (healthScore) setScore(healthScore[healthScore.length - 1].y - healthScore[healthScore.length - 2].y)
    if (score > 0) return setMessage(`${score}점 높아졌어요.`)
    return setMessage(`${Math.abs(score)}점 낮아졌어요.`)
  }, [healthScore, score])

  if (!healthScore) return null

  return (
    <div className={styles.totalChartwrapper}>
      <h3>
        건강 점수는
        <br />
        총점이 지난해 보다 <mark>{message}</mark>
      </h3>
      <div className={styles.chartWrapper}>
        <VictoryChart domainPadding={20}>
          <VictoryAxis
            tickValues={healthScore.map((item) => item.x)}
            style={{ axis: { display: 'none' }, tickLabels: { fontFamily: 'inherit', fontWeight: 700 } }}
          />
          <VictoryGroup data={healthScore}>
            <VictoryBar
              barWidth={35}
              barRatio={1}
              style={{
                data: {
                  fill: ({ datum }) => (datum.x === healthScore.at(-1)?.x ? colors.yellow : colors.bar),
                },
                labels: {
                  fill: ({ datum }: CallbackArgs) =>
                    datum.x === healthScore.at(-1)?.x ? colors.active : colors.border,
                  fontFamily: 'inherit',
                },
              }}
              labels={({ datum }) => String(Math.round(datum.y))}
              animate={{
                onExit: {
                  duration: 500,
                  before: () => ({
                    _y: 0,
                    fill: 'orange',
                  }),
                },
              }}
            />
            <VictoryLine
              style={{ data: { stroke: colors.border, strokeWidth: 2 } }}
              animate={{
                onLoad: { duration: 1000 },
                duration: 500,
              }}
            />
            <VictoryScatter
              size={4}
              style={{
                data: {
                  fill: ({ datum }) => (datum.x === healthScore.at(-1)?.x ? colors.active : colors.border),
                },
              }}
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
    </div>
  )
}

export default TotalChart
