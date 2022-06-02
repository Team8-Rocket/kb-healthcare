import json from 'assets/json/response.json'
// mediDy의 마지막 값
const MEDIDY = json.wxcResultMap.mediDy.replace(/\[|\]/g, '').split(', ')[9]
// medi 값
const MEDI = json.wxcResultMap.medi

interface predictionDataProps {
  indicator: string
  cost: number
}

const predictionData: predictionDataProps[] = [
  { indicator: '나', cost: Number(MEDI) },
  { indicator: '10년 후', cost: Number(MEDIDY) },
]

export default predictionData
