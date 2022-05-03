import { Title } from './styles'

export type HeadingColors = 'primary' | 'white'

export type HeadingSizes = 'normal' | 'large'

interface HeadingProps {
  children: React.ReactNode
  color?: HeadingColors
  size?: HeadingSizes
}

export const Heading = ({
  color = 'white',
  size = 'normal',
  children
}: HeadingProps) => {
  return (
    <Title color={color} size={size}>
      {children}
    </Title>
  )
}
