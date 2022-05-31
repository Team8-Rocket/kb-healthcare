import styles from './tag.module.scss'
import cx from 'classnames'
// import { cx } from 'styles'

interface Props {
  tagTitle: string
  tagColor: string
}
const Tag = ({ tagTitle, tagColor }: Props) => {
  const COLORS = {
    highlight: styles.highlightTag,
    normal: styles.normalTag,
  }[tagColor]
  return <div className={cx(styles.tagContainer, COLORS)}>{tagTitle}</div>
}

export default Tag
