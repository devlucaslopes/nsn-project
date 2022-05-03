import { FiChevronDown } from 'react-icons/fi'

import { BackgroundGrid } from '../../components/BackgroundGrid'
import { Button } from '../../components/Button'
import { Circle } from '../../components/Circle'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'

import NSNExample from '../../assets/example.png'
import Monalisa from '../../assets/monalisa.png'

import { Heading } from '../../components/Heading'
import { Carousel } from '../../components/Carousel'

import {
  CallToActionWrapper,
  Hero,
  HeroCircleWrapper,
  NextSection,
  LastReleases,
  HowWorks
} from './styles'

export const Home = () => (
  <>
    <Hero>
      <BackgroundGrid />

      <NextSection>
        <a href="">
          <span>Últimos lançamentos</span>
          <FiChevronDown size={24} />
        </a>
      </NextSection>

      <Container>
        <Header />
      </Container>

      <CallToActionWrapper>
        <Container>
          <div>
            <h1>NFT é passado</h1>
            <p>
              Agora a moda é <span>N.S.N</span>, um projeto revolucionário para
              ilustar a rotina dos desenvolvedores de uma forma divertida.{' '}
              <span>Não serve pra nada, mas é bonitinho</span>.
            </p>

            <Button>Ver coleção</Button>
          </div>

          <img src={NSNExample} alt="Coleção de NSNs" />
        </Container>
      </CallToActionWrapper>

      <HeroCircleWrapper>
        <Circle />
      </HeroCircleWrapper>
    </Hero>

    <LastReleases>
      <Container>
        <Heading>Últimos lançamentos</Heading>

        <Carousel />
      </Container>
    </LastReleases>

    <HowWorks>
      <Container>
        <div>
          <Heading>Como funciona</Heading>
          <p>
            As arte são negociadas atráves de pontos obtidos nas lives do
            @devlucaslopes.
          </p>
          <p>
            A cada 10 minutos você ganha 5 bugcoins. As lives acontecem de
            segunda a sexta de 08:00 ás 09:00.
          </p>
          <Button>Ver coleção</Button>
        </div>
        <img src={Monalisa} alt="A monalisa com a cara do @devlucaslopes" />
      </Container>
    </HowWorks>

    <footer>lorem</footer>
  </>
)
