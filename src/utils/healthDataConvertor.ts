import json from 'assets/json/response.json'

const userScore = Number(json.wxcResultMap.wHscore)
const meanScore = Number(json.wxcResultMap.hscore_peer)

const gender = Number(json.wxcResultMap.paramMap.sex) % 2 === 1 ? '남자' : '여자'
const age = Number(json.wxcResultMap.paramMap.age)
const agePerTen = age - (age % 10)
const ageRange = agePerTen >= 10 ? `${agePerTen}대` : '10대 미만'

const percent = Math.round(100 - Number(json.wxcResultMap.hscorePercent))
const calcPercent = percent >= 50 ? `상위 ${percent}%` : `하위 ${percent}%`
const diffScore = userScore - meanScore

const getDiffMessage = (score: number) => {
  if (score > 0) return `${score}점 높아요`
  if (score < 0) return `${Math.abs(diffScore)}점 낮아요`
  return '평균과 같아요'
}

const diffMessage = getDiffMessage(diffScore)

const healthData = [
  { indicator: '나', score: userScore },
  { indicator: '30대 남성', score: meanScore },
]

export const getHealthData = () => ({
  message: `${ageRange} ${gender} 평균점수보다`,
  diffScore,
  diffMessage,
  calcPercent,
  healthData,
})

export const setColor = (datum: { indicator: string; score: number }, myColor: string, elseColor: string) => {
  return datum.indicator === '나' ? myColor : elseColor
}
