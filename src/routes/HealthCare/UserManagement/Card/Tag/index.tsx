import styles from './tag.module.scss'
import cx from 'classnames'

interface Props {
  tagTitle: string
}
const Tag = ({ tagTitle }: Props) => {
  if (tagTitle === '') return null
  return <div className={cx(styles.tagContainer)}>{tagTitle}</div>
}

export default Tag
