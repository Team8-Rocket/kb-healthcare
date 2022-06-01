import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup, VictoryLine, VictoryScatter } from 'victory'
import cx from 'classnames'

import styles from './compareScoreChart.module.scss'
import chartData from './jsonToChartData'

const CompareScoreChart = () => {
  const scoreDifference = chartData[0].score - chartData[1].score

  const getIndicatorType = () => {
    if (scoreDifference < 0) return 'more'
    if (scoreDifference > 0) return 'less'
    return 'same'
  }

  const comparativeIndicator = {
    less: { text: '낮아요' },
    same: { text: '같아요' },
    more: { text: '높아요' },
  }[getIndicatorType()]

  return (
    <div className={styles.comparativeChart}>
      <h1 className={styles.chartTitle}>나의 10년 후 건강 예측</h1>
      <p className={styles.description}>
        10년 후 예상 건강점수는
        <br />
        {scoreDifference === 0 && <span>현재와 같아요.</span>}
        {scoreDifference !== 0 && (
          <span>
            현재보다{' '}
            <mark
              className={cx(
                styles.highlight,
                { [styles.over]: scoreDifference < 0 },
                { [styles.under]: scoreDifference > 0 }
              )}
            >
              {scoreDifference}점 {comparativeIndicator.text}
            </mark>
          </span>
        )}
      </p>
      <VictoryChart domainPadding={{ x: 50 }}>
        <VictoryAxis
          tickValues={chartData.map((el) => el.indicator)}
          style={{ axis: { display: 'none' }, tickLabels: { fontWeight: 700, fontSize: 20 } }}
        />
        <VictoryGroup data={chartData} x='indicator' y='score'>
          <VictoryBar
            x='indicator'
            y='score'
            labels={({ datum }) => `${datum.score}점`}
            style={{
              data: { fill: ({ datum }) => (datum.indicator === '나' ? '#F9D548' : '#EF8A4E') },
              labels: { fontSize: 18 },
            }}
            barWidth={70}
            cornerRadius={{ top: 8 }}
          />
          <VictoryLine x='indicator' y='score' />
          <VictoryScatter
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
        </VictoryGroup>
      </VictoryChart>
    </div>
  )
}

export default CompareScoreChart
