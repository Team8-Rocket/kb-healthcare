import { useState } from 'react'

import Card from 'routes/HealthCare/UserManagement/Card'
import { getResultMapBoj, splitCardContent } from 'utils/healthDataUtil'

import styles from './Card/card.module.scss'

const UserManagement = () => {
  const [resultMapData] = useState<{ subject: string; value: string; param: string }[]>(getResultMapBoj())

  return (
    <div className={styles.cardSection}>
      {resultMapData.map((item, index) => {
        const cardIndex = index
        const splitData = item.value.split(' - ')
        const { subString, contentArr } = splitCardContent(splitData)
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
