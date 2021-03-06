import data from 'assets/json/response.json'

const { healthTagList, wxcResultMap } = data

interface ITagList {
  [key: string]: string[]
}

const tranformData = () => {
  const newData: ITagList = {}
  healthTagList.forEach((item) => {
    newData[item.tagId] = [item.tag1, item.tag2, item.tag3]
  })
  return newData
}

const healthTags = tranformData()

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

export const getHealthScore = () => {
  return wxcResultMap.wMymaxHscore
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

export const splitCardContent = (mapData: string[]) => {
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

export const getTagList = (param: string) => {
  if (param === 'resTotalCholesterol') return healthTags.resLDLCholesterol
  return healthTags[param]
}

export const getNormalText = (param: string) => {
  const normalData = {
    resBMI: '정상 : 18.5 ~ 22.9 kg/m²',
    resBloodPressure: '정상 : 이완 60~79 / 수축 90~119 mmHg',
    resTotalCholesterol: '정상 : 200mg/dL 이하',
    resFastingBloodSuger: '정상 : 69~99 mg/dL',
    resGFR: '정상 : 60 mL/min 이상',
  }[param]
  return normalData
}
