import { FiChevronDown } from 'react-icons/fi'

import { BackgroundGrid } from '../../components/BackgroundGrid'
import { Button } from '../../components/Button'
import { Circle } from '../../components/Circle'
import { Container } from '../../components/Container'
import { Header } from '../../components/Header'

import NSNExample from '../../assets/example.png'

import {
  CallToActionWrapper,
  Hero,
  HeroCircleWrapper,
  NextSection
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

    <div>
      <h1>Não é passado</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio est
        dolorem impedit aut autem repellendus expedita distinctio officiis
        laboriosam quod laudantium minima earum rerum hic itaque corporis eos,
        enim mollitia?
      </p>
    </div>
  </>
)
