import { useEffect } from 'react'
import data from 'assets/json/response.json'

import { IResultMap } from 'types/health'
import Card from './Card'

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
      <Card />
    </div>
  )
}

export default UserManagement
