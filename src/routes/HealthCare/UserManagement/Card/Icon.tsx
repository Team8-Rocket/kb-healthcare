import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8, IconDefault } from 'assets/svgs'

interface Props {
  iconName: string
}

const Icon = ({ iconName }: Props) => {
  const tagIcon = {
    Icon1: <Icon1 />,
    Icon2: <Icon2 />,
    Icon3: <Icon3 />,
    Icon4: <Icon4 />,
    Icon5: <Icon5 />,
    Icon6: <Icon6 />,
    Icon7: <Icon7 />,
    Icon8: <Icon8 />,
  }[iconName]
  if (!tagIcon) return <IconDefault />
  return tagIcon
}
export default Icon
