import PredictionCost from './PredictionCost'
import HealthAverageChart from './HealthAverageChart/HealthAverageChart'
import CompareScoreChart from './CompareScoreChart'

const Chart = () => {
  return (
    <>
      <HealthAverageChart />
      <CompareScoreChart />
      <PredictionCost />
    </>
  )
}
export default Chart
