import { useState } from 'react'

import Card from 'routes/HealthCare/UserManagement/Card'
import { getResultMapBoj, getParamMap, splitComma } from 'utils/healthDataUtil'

// interface IHealthManageData {
//   [key: string]: string
// }

const UserManagement = () => {
  const [resultMapDatas] = useState<{ subject: string; value: string; param: string }[]>(getResultMapBoj())

  return (
    <div>
      <p>HealthCare</p>
      {resultMapDatas.map((item, index) => {
        const cardIndex = index
        const splitData = item.value.split(' - ')
        const { subString, contentArr } = splitComma(splitData)
        return (
          <Card
            key={`${subString}${cardIndex}`}
            subject={item.subject}
            result={subString}
            content={contentArr}
            cardIndex={cardIndex}
            paramName={item.param}
          />
        )
      })}
    </div>
  )
}

export default UserManagement
