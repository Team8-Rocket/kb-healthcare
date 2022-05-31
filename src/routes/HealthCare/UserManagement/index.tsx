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
  const [subject, setSubject] = useState<string | string[]>('')
  const [content, setContent] = useState<string | string[]>('')

  useEffect(() => {
    const { subString, contentArr } = splitComma(resultMapDatas[1].split(' - '))
    setSubject(subString)
    setContent(contentArr)
  }, [])
  return (
    <div>
      <p>HealthCare</p>
      <Card subject={resultMapDatas[1].split(' - ')[0].trim()} content={resultMapDatas[1].split(' - ')[1]} />
    </div>
  )
}

export default UserManagement
