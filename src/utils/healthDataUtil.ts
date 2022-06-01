import data from 'assets/json/response.json'

const { healthTagList, healthScoreList, userInfo, wxcResultMap } = data

export const getResultMapBoj = () => {
  const { drnkQty, exerciQty, resBMI, resBloodPressure, resFastingBloodSuger, resGFR, resTotalCholesterol, smkQty } =
    wxcResultMap.boj
  return [
    { subject: '체질량지수', value: resBMI, param: 'resBMI' },
    { subject: '혈압', value: resBloodPressure, param: 'resBloodPressure' },
    { subject: '총콜레스테롤', value: resTotalCholesterol, param: 'resTotalCholesterol' },
    { subject: '흡연', value: smkQty, param: 'smkQty' },
    { subject: '식전혈당', value: resFastingBloodSuger, param: 'resFastingBloodSuger' },
    { subject: '음주', value: drnkQty, param: 'drnkQty' },
    { subject: '신사구체여과물', value: resGFR, param: 'resGFR' },
    { subject: '운동량', value: exerciQty, param: 'exerciQty' },
  ]
}

export const hasLetterStand = (word: string) => {
  const lastLetter = word[word.length - 1]
  const uniCode = lastLetter.charCodeAt(0)
  const has = (uniCode - 44032) % 28 !== 0
  const result = has ? '은' : '는'
  return result
}

export const getParamMap = (param: string) => {
  const { resBMI, resBloodPressure, resFastingBloodSuger, resGFR, resTotalCholesterol } = wxcResultMap.paramMap

  const paramMap = {
    resBMI: { value: resBMI, unit: 'kg/m2 로' },
    resBloodPressure: { value: resBloodPressure, unit: 'mmHg 로' },
    resTotalCholesterol: { value: resTotalCholesterol, unit: 'mg/dL 로' },
    resFastingBloodSuger: { value: resFastingBloodSuger, unit: 'mg/dL 로' },
    resGFR: { value: resGFR, unit: 'mL/min 로' },
  }[param]
  if (!param) return undefined

  return paramMap
}

export const splitComma = (mapData: string[]) => {
  const subString: string = mapData[0]
  const contentArr = mapData.slice(1).reduce((acc: string[], cur) => {
    const result = cur.split('. ')
    for (let i = 0; i < result.length; i += 1) {
      if (result[i] !== '') acc.push(`${result[i].replace('.', '')}`)
    }
    return acc
  }, [])
  return { subString, contentArr }
}
