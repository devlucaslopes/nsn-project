import { Title } from './styles'

export type HeadingColors = 'primary' | 'white'

interface HeadingProps {
  children: React.ReactNode
  color?: HeadingColors
}

export const Heading = ({ color = 'white', children }: HeadingProps) => {
  return <Title color={color}>{children}</Title>
}
