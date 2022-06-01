import { useEffect } from 'react'
import data from 'assets/json/response.json'

import { IResultMap } from 'types/health'
import Card from './Card'
import Tag from './Tag'
import Chart from '../Chart'

const { healthTagList, healthScoreList, userInfo, wxcResultMap } = data

// interface IHealthManageData {
//   [key: string]: string
// }
const UserManagement = () => {
  useEffect(() => {
    console.log(wxcResultMap)
    const { boj, paramMap } = wxcResultMap
  })
  return (
    <div>
      <p>HealthCare</p>
      <Tag tagTitle='#유산소운동' tagColor='highlight' />
      <Tag tagTitle='#체중감량' tagColor='normal' />
      <Chart />
    </div>
  )
}

export default UserManagement
