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
  const contentArr: string[] = mapData.slice(1)
  return { subString, contentArr }
}
