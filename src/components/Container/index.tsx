import { Wrapper } from './styles'

interface ContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return <Wrapper>{children}</Wrapper>
}
