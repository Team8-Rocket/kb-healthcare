import { useState } from 'react'

import Card from 'routes/HealthCare/UserManagement/Card'
import { getResultMapBoj, splitCardContent, getHealthScore } from 'utils/healthDataUtil'

import styles from './userManagement.module.scss'

const UserManagement = () => {
  const [resultMapData] = useState<{ subject: string; value: string; param: string }[]>(getResultMapBoj())
  const [healthScore] = useState(getHealthScore())

  return (
    <section className={styles.cardSection}>
      <h1>맞춤 건강관리</h1>
      <p className={styles.description}>O Care와 함께 건강관리해보세요.</p>
      <p className={styles.description}>
        건강점수를 최대 <mark>{healthScore}점</mark>까지 올릴 수 있어요.
      </p>

      <div>
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
    </section>
  )
}

export default UserManagement
