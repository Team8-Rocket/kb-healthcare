import styles from './tag.module.scss'

interface Props {
  tagTitle: string
  tagColor: string
}
const Tag = ({ tagTitle, tagColor }: Props) => {
  const COLORS = {
    highlight: styles.highlightTag,
    normal: styles.normalTag,
  }[tagColor]
  return <div>tag</div>
}

export default Tag
