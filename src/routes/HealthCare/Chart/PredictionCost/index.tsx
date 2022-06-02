import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryLine, VictoryScatter, VictoryTheme } from 'victory'
import json from 'assets/json/response.json'

const MEDIDY = json.wxcResultMap.mediDy.replace(/\[|\]/g, '').split(', ')[9]

const MEDI = json.wxcResultMap.medi

const data = [
  { indicator: '나', cost: Number(MEDI) },
  { indicator: '10년 후', cost: Number(MEDIDY) },
]

const PredictionCost = () => {
  return (
    <section>
      <h3>
        10년 후 예상 의료비는
        <br />
        현재보다 원 많아요
      </h3>
      <VictoryChart domainPadding={40} theme={VictoryTheme.material}>
        <VictoryAxis
          tickValues={['나', '10년 후']}
          style={{ axis: { stroke: '#a4b0be' }, tickLabels: { fontFamily: 'inherit' } }}
          domain={{ x: [0, 3] }}
        />
        <VictoryBar
          data={data}
          x='indicator'
          y='cost'
          style={{
            data: {
              fill: ({ datum }) => (datum.indicator === '나' ? '#ffa502' : '#a4b0be'),
            },
          }}
        />
        <VictoryLine
          data={data}
          x='indicator'
          y='cost'
          labels={({ datum }) => `${datum.cost}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
          labelComponent={<VictoryLabel dy={-15} />}
          style={{ labels: { fontFamily: 'inherit' } }}
        />
        <VictoryScatter
          data={data}
          x='indicator'
          y='cost'
          style={{
            data: {
              fill: '#2f3542',
            },
          }}
        />
      </VictoryChart>
    </section>
  )
}
export default PredictionCost
