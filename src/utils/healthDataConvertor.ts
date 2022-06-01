import json from 'assets/json/response.json'

// 유저 점수 (875)
const userScore = Number(json.wxcResultMap.wHscore)
// 평균 점수 (866)
const meanScore = Number(json.wxcResultMap.hscore_peer)

// 성별 (남자, 여자)
const gender = Number(json.wxcResultMap.paramMap.sex) % 2 === 1 ? '남자' : '여자'
// 나이 (36)
const age = Number(json.wxcResultMap.paramMap.age)
// 나이를 '대' 단위로 변경 (30)
const 변수명어렵 = age - (age % 10)
// 나이 범위 (30 대)
const ageRange = 변수명어렵 >= 10 ? `${변수명어렵}대` : '10대 미만' // 33살 = 33 - 3  -> 30대

// 퍼센트 (41)
const percent = Math.round(100 - Number(json.wxcResultMap.hscorePercent))
// 퍼센트 + % (41%)
const calcPercent = percent >= 50 ? `상위 ${percent}%` : `하위 ${percent}%`
// 점수의 차이 (875 - 866)
const diffScore = userScore - meanScore

// 그래프에 사용되는 data
const healthData = [
  { indicator: '나', score: userScore },
  { indicator: '30대 남성', score: meanScore },
]

export const getHealthData = () => ({
  message: `${ageRange} ${gender} 평균점수보다`,
  diffScore,
  calcPercent,
  healthData,
})

export const setColor = (
  // data: { x: string; y: number }[],
  datum: { indicator: string; score: number },
  myColor: string,
  elseColor: string
  // isYears: boolean
) => {
  // if (isYears) return datum.x === data[data.length - 1].x ? myColor : elseColor
  return datum.indicator === '나' ? myColor : elseColor
}
