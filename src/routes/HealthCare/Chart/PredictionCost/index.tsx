import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryLine, VictoryScatter, VictoryTheme } from 'victory'
import json from 'assets/json/response.json'
import { useState } from 'react'
// mediDy의 마지막 값
const MEDIDY = json.wxcResultMap.mediDy.replace(/\[|\]/g, '').split(', ')[9] // string
// medi 값
const MEDI = json.wxcResultMap.medi // string

const data = [
  // who => indicator 로 통일
  { indicator: '나', cost: Number(MEDI) },
  { indicator: '10년 후', cost: Number(MEDIDY) },
]
const costGap = data[1].cost - data[0].cost
const plusMinus = Math.sign(costGap)

const PredictionCost = () => {
  return (
    <section>
      <h3>
        10년 후 예상 의료비는
        <br />
        현재보다 원 많아요
      </h3>
      <VictoryChart domainPadding={40} theme={VictoryTheme.material}>
        <VictoryAxis tickValues={['나', '10년 후']} style={{ axis: { stroke: '#a4b0be' } }} domain={{ x: [0, 3] }} />
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
