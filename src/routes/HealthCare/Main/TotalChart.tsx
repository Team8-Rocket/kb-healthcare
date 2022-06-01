import React, { useState, useEffect } from 'react'
import { VictoryAxis, VictoryChart, VictoryBar, VictoryLine, VictoryScatter, VictoryGroup } from 'victory'
import styles from './totalChart.module.scss'
import DATAJSON from '../../../assets/json/response.json'
import dayjs from 'dayjs'

interface IData {
  SCORE: string
  TYPE_CD: string
  SUBMIT_DATE: string
  CNTNS: string
}

interface IScore {
  year: number
  score: number
}

export const CHART_STYLE = {
  value: {
    x: 'year',
    y: 'score',
  },
}

const BORDER_COLOR = '#a9a9a9'
const MARK_COLOR = '#ff612d'
const BAR_COLOR = '#e7e7e7'
const KB_COLOR = '#ffd300'

const HEALTH_SCORE_LIST = DATAJSON.healthScoreList

const TotalChart = () => {
  const [score, setScore] = useState(0)
  const [healthScore, setHealthScore] = useState<IScore[]>()
  // const thisYear = healthScore[healthScore.length - 1].year
  const THIS_YEAR = 2021

  useEffect(() => {
    const data = HEALTH_SCORE_LIST.map((item: IData) => {
      return { year: Number(dayjs(item.SUBMIT_DATE).format('YYYY')), score: Number(item.SCORE) }
    })
    setHealthScore(data)
    const scoreLength = healthScore?.length
    // setScore(healthScore[scoreLength].score)
    console.log(score)
  }, [])
  if (!healthScore) return null

  return (
    <div className={styles.totalChartwrapper}>
      <h3>
        건강 점수는
        <br />
        총점이 지난해 보다 <mark>{score}점 낮아졌어요.</mark>
      </h3>
      <div className={styles.chartWrapper}>
        <VictoryChart domainPadding={20}>
          {/* 아마도 그래프 여러개 그리려면 (겹쳐서) 그룹으로 감싸야하는거같고 {...CHART_STYLE.value} 이거는 다른팀꺼
            봐서 참고한거였는데 x , y축을 명시적으로 지정해줘야되는거같기도하네요  아 네네 
          */}
          {/* 이거 처음에 에러뜨는건 그 데이터 첫 렌더링때 없어서 뜨는거같은데 뭔가 마지막에 콘솔에 데이터 있는거 찍힌다음에는 에러안떠서  */}
          {/* 이런식으로 중간에 있었어요 */}
          {/* //오 쉣   이거 근데 처음에 VictoryChart가 빅토리 코드 전체를 감싸야하는데 그냥 중간에 껴있었어요  */}
          {/* <VictoryGroup> */}
          <VictoryAxis
            style={{ axis: { stroke: BORDER_COLOR, strokeWidth: 2 } }}
            tickValues={[2015, 2017, 2019, 2020, 2021]}
            // tickFormat={(x) => x}
          />
          <VictoryBar
            data={healthScore}
            x='year'
            y='score'
            // {...CHART_STYLE.value}
            style={{
              data: {
                fill: ({ datum }) => (datum.year === THIS_YEAR ? KB_COLOR : BAR_COLOR),
              },
            }}
            labels={({ datum }) => datum.score}
          />
          <VictoryLine data={healthScore} {...CHART_STYLE.value} style={{ data: { stroke: BORDER_COLOR } }} />
          <VictoryScatter
            data={healthScore}
            // {...CHART_STYLE.value}
            size={4}
            style={{
              data: {
                fill: ({ datum }) => (datum.year === THIS_YEAR ? MARK_COLOR : BORDER_COLOR),
              },
            }}
          />
          {/* </VictoryGroup> */}
        </VictoryChart>
      </div>
    </div>
  )
}

export default TotalChart
