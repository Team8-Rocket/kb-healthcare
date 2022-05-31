import { useEffect, useState } from 'react'
import data from 'assets/json/response.json'

import { IResultMap } from 'types/health'
import Card from 'routes/HealthCare/UserManagement/Card'
import { getResultMapData, splitComma } from 'utils/healthDataUtil'

// interface IHealthManageData {
//   [key: string]: string
// }

const UserManagement = () => {
  const [resultMapDatas] = useState<string[]>(getResultMapData())
  const [subject, setSubject] = useState<string>('')
  const [content, setContent] = useState<string[]>([])

  return (
    <div>
      <p>HealthCare</p>
      {resultMapDatas.map((item) => {
        const splitData = item.split(' - ')
        const { subString, contentArr } = splitComma(splitData)
        return <Card key={subString} subject={subString} content={contentArr} />
      })}
    </div>
  )
}

export default UserManagement
