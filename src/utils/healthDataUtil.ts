import data from 'assets/json/response.json'

const { healthTagList, healthScoreList, userInfo, wxcResultMap } = data

export const getResultMapData = () => {
  const {
    drnkQty,
    exerciQty,
    resBMI,
    resBloodPressure,
    resFastingBloodSuger,
    resGFR,
    resHDLCholesterol,
    resLDLCholesterol,
    resTotalCholesterol,
    resUrinaryProtein,
    smkQty,
  } = wxcResultMap.boj

  return [
    drnkQty,
    exerciQty,
    resBMI,
    resBloodPressure,
    resFastingBloodSuger,
    resGFR,
    resHDLCholesterol,
    resLDLCholesterol,
    resTotalCholesterol,
    resUrinaryProtein,
    smkQty,
  ]
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
