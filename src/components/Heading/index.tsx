import { Title } from './styles'

interface HeadingProps {
  children: React.ReactNode
}

export const Heading = ({ children }: HeadingProps) => {
  return <Title>{children}</Title>
}
