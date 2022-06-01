import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryLine, VictoryScatter } from 'victory'
import { CallbackArgs } from 'victory-core'

import styles from './tenYearChart.module.scss'
import { cx } from 'styles'
import { CHART_STYLE } from './chartStyle'
import { getHealthData, setColor } from 'utils/healthDataConvertor'

const TenYearChart = () => {
  const { message, diffScore, calcPercent, healthData } = getHealthData()

  // const isYears = false
  // const chartHeight = isYears ? 250 : 300
  // const barWidth = isYears ? 40 : 60
  // const fontSize = isYears ? 16 : 20
  // const scatterSize = isYears ? 4 : 6
  // const barElseColor = isYears ? '#eeeeee' : '#999'

  return (
    <div className={cx(styles.container)}>
      <div className={styles.description}>
        <p className={styles.message}>
          {message}
          <br />
          <span>{diffScore}점 높아요</span>
        </p>

        {/* content의 height 50% 배경색 칠하는 것 좋은 방법 고민 */}
        <p className={styles.percent}>{calcPercent}</p>
      </div>
      <VictoryChart height={300}>
        <VictoryAxis style={{ axis: { stroke: 'white' }, tickLabels: { fontSize: 20, ...CHART_STYLE.label } }} />

        {/* data={healthData} VictoryGroup에 data를 넣는 경우 키값이 x,y여야 하는 것 같음 */}
        <VictoryGroup>
          <VictoryBar
            data={healthData}
            {...CHART_STYLE.value}
            barWidth={60}
            style={{
              data: {
                fill: ({ datum }: CallbackArgs) => setColor(datum, '#ffd300', '#999'),
              },
              labels: {
                ...CHART_STYLE.label,
                fill: ({ datum }: CallbackArgs) => setColor(datum, '#49A0FF', '#000000'),
                fontSize: 20,
              },
            }}
            labels={({ datum }) => `${datum.score}점`}
          />
          <VictoryLine data={healthData} {...CHART_STYLE.value} />
          <VictoryScatter
            data={healthData}
            {...CHART_STYLE.value}
            size={6}
            style={{
              data: {
                fill: ({ datum }: CallbackArgs) => setColor(datum, '#000000', '#000000'),
                stroke: ({ datum }: CallbackArgs) => setColor(datum, '#000000', '#000000'),
                strokeWidth: 1,
              },
            }}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  )
}

export default TenYearChart
