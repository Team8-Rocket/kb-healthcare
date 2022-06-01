import { useState } from 'react'

import Tag from './Tag'
import Icon from './Icon'
import { getParamMap, hasLetterStand, getTagList } from 'utils/healthDataUtil'

import styles from './card.module.scss'

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
  const [tagList] = useState(getTagList(paramName))
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardIndex}>
        <div>
          <p>0{cardIndex + 1}</p>
        </div>
        <div>
          <Icon iconName={`Icon${cardIndex + 1}`} />
        </div>
      </div>
      <div className={styles.cardHeader}>
        <h2>{subject}</h2>
        <div className={styles.cardDescription}>
          {param && (
            <p>
              {subject}
              {hasLetterStand(subject)} {param.value} {param.unit}
            </p>
          )}
          <p>
            <strong>{result}</strong> 입니다.
          </p>
        </div>
        <span>정상: 200mg/dL 이하</span>
      </div>
      <div className={styles.cardTag}>
        {tagList.map((item, index) => {
          const tagListIndex = index
          return <Tag key={`index-${item}-${tagListIndex}`} tagTitle={`${item}`} />
        })}
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
