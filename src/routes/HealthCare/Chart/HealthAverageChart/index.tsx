import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryLine, VictoryScatter } from 'victory'
import { CallbackArgs } from 'victory-core'

import styles from './healthAverageChart.module.scss'
import { cx } from 'styles'
import { CHART_STYLE } from './chartStyle'
import { getHealthData, setColor } from 'utils/healthDataConvertor'

const HealthAverageChart = () => {
  const { message, diffScore, diffMessage, calcPercent, healthData } = getHealthData()

  return (
    <div className={cx(styles.container)}>
      <div className={styles.description}>
        <p className={styles.message}>
          {message}
          <br />
          <mark className={cx({ [styles.lower]: diffScore < 0 }, { [styles.higher]: diffScore > 0 })}>
            {diffMessage}
          </mark>
        </p>

        <p className={styles.percent}>{calcPercent}</p>
      </div>
      <VictoryChart height={300}>
        <VictoryAxis style={{ axis: { stroke: 'white' }, tickLabels: { fontSize: 20, ...CHART_STYLE.label } }} />

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

export default HealthAverageChart
