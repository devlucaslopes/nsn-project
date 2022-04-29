import { BackgroundGrid } from '../../components/BackgroundGrid'
import { Circle } from '../../components/Circle'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'

import { Hero, HeroCircleWrapper } from './styles'

export const Home = () => (
  <>
    <Hero>
      <BackgroundGrid />

      <Container>
        <Header />
      </Container>

      <HeroCircleWrapper>
        <Circle />
      </HeroCircleWrapper>
    </Hero>
  </>
)
