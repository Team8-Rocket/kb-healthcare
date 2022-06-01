import { useState } from 'react'

import Tag from './Tag'
import Icon from './Icon'
import { getParamMap, hasLetterStand } from 'utils/healthDataUtil'

import styles from './card.module.scss'

const name = 'resMBI'

// interface Props {
//   color: string
//   icon: FunctionComponent<SVGProps<SVGSVGElement>>
//   titleNumber: string
//   title: string
//   summary: string
//   boldSummary: string
//   normalStandard?: string
//   tagText: string[]
//   contents: string[]
// }

interface Props {
  subject: string
  content: string | string[]
  result: string
  cardIndex: number
  paramName: string
}

const Card = ({ subject, result, content, paramName, cardIndex }: Props) => {
  const [param] = useState(getParamMap(paramName))
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardIndex}>
        <p>0{cardIndex + 1}</p>
        <div>
          <Icon iconName={`Icon${cardIndex + 1}`} />
        </div>
      </div>
      <div className={styles.cardHeader}>
        <h2>{subject}</h2>
        {param && (
          <p>
            {subject}
            {hasLetterStand(subject)} {param.value} {param.unit}
          </p>
        )}
        <p>
          <strong>{result}</strong> 입니다.
        </p>
        <span>정상: 200mg/dL 이하</span>
      </div>
      <div className={styles.cardTag}>
        <Tag tagTitle='#유산소운동' tagColor='highlight' />
        <Tag tagTitle='#체중감량' tagColor='normal' />
      </div>
      <div className={styles.cardContents}>
        <h3>이렇게 관리해 보세요!</h3>
        <ul>
          {typeof content === 'object' ? (
            content.map((item) => {
              return <li key={`index-${item}`}>☝🏼 {item}</li>
            })
          ) : (
            <li key={content}>☝🏼 {content}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Card
