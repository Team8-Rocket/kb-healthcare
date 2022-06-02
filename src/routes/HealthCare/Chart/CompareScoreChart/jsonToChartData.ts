import json from 'assets/json/response.json'

const WHSCORE = json.wxcResultMap.wHscore
const WHSCORYDY = json.wxcResultMap.wHscoreDy.replace(/\[|\]/g, '').split(', ').at(-1)

interface Score {
  indicator: string
  score: number
}

const chartData: Score[] = [
  { indicator: '나', score: Number(WHSCORE) },
  { indicator: '10년 후', score: Number(WHSCORYDY) },
]

export default chartData
