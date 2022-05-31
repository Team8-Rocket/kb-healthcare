import { useEffect } from 'react'
import data from 'data/res.json'

import { IResultMap } from 'types/health'

const { healthTagList, healthScoreList, userInfo, wxcResultMap } = data

// interface IHealthManageData {
//   [key: string]: string
// }
const UserManagement = () => {
  useEffect(() => {
    console.log(wxcResultMap)
    const { boj, paramMap } = wxcResultMap
  })
  return <div>HealthCare</div>
}

export default UserManagement
