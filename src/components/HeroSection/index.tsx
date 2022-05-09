import { BackgroundGrid } from '../BackgroundGrid'
import { Wrapper } from './styles'

interface HeroSectionProps {
  children: React.ReactNode
}

export const HeroSection = ({ children }: HeroSectionProps) => {
  return (
    <Wrapper>
      <BackgroundGrid />

      {children}
    </Wrapper>
  )
}
