import { BackgroundGrid } from '../../components/BackgroundGrid'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'

import { Hero } from './styles'

export const Home = () => (
  <>
    <Hero>
      <BackgroundGrid />
      <Container>
        <Header />
      </Container>
    </Hero>
  </>
)
