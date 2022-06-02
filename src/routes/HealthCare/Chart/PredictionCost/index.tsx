import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryScatter } from 'victory'
import predictionData from './predictionData'
import styles from './predictionCost.module.scss'
import cx from 'classnames'

const PredictionCost = () => {
  const gap = predictionData[1].cost - predictionData[0].cost

  const costGap = () => {
    if (Math.sign(gap) === -1)
      return `${(gap * -1).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원 적어요`
    if (Math.sign(gap) === 1) return `${gap.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원 많아요`
    return `현재와 같아요`
  }

  return (
    <section className={styles.predictionCost}>
      <h3 className={styles.description}>
        10년 후 예상 의료비는
        <br />
        {`현재보다 `}
        <mark
          className={cx(
            styles.highlight,
            { [styles.over]: Math.sign(gap) === 1 },
            { [styles.under]: Math.sign(gap) === -1 }
          )}
        >
          {costGap()}
        </mark>
      </h3>
      <VictoryChart domainPadding={{ x: 50 }}>
        <VictoryAxis
          tickValues={predictionData.map((value) => value.indicator)}
          style={{ axis: { display: 'none' }, tickLabels: { fontWeight: 700, fontSize: 20, fontFamily: 'inherit' } }}
        />
        <VictoryBar
          data={predictionData}
          x='indicator'
          y='cost'
          style={{
            data: { fill: ({ datum }) => (datum.indicator === '나' ? '#F9D548' : '#EF8A4E') },
            labels: { fontSize: 18, fontFamily: 'inherit' },
          }}
          labels={({ datum }) => `${datum.cost.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원`}
          barWidth={70}
          cornerRadius={{ top: 8 }}
        />
        <VictoryLine data={predictionData} x='indicator' y='cost' />
        <VictoryScatter
          data={predictionData}
          x='indicator'
          y='cost'
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
    </section>
  )
}
export default PredictionCost
