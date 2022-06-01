import Tag from './Tag'
import data from 'assets/json/response.json'
import { FunctionComponent, SVGProps } from 'react'
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7 } from 'assets/svgs'
import styles from './card.module.scss'

const name = 'resMBI'

interface Props {
  color: string
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
  titleNumber: string
  title: string
  summary: string
  boldSummary: string
  normalStandard?: string
  tagText: string[]
  contents: string[]
}

interface Data {
  subject: string
  content: string | string[]
}

const Card = ({ subject, content }: Data) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardIndex}>
        <p>03</p>
        <Icon3 />
      </div>
      <div className={styles.cardHeader}>
        <h2>총콜레스트롤</h2>
        <p>
          총 콜레스테롤은 243mg/dl로
          <br />
          <strong>{subject}</strong> 입니다
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
              return <li key={item}>{item}</li>
            })
          ) : (
            <li key={content}>{content}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Card
