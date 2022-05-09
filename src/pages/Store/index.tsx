import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Heading } from '../../components/Heading'
import { HeroSection } from '../../components/HeroSection'

import NSNExample from '../../assets/monalisa.png'

import { Grid, Wrapper } from './styles'
import { NSNPreview } from '../../components/NSNPreview'

export const Store = () => (
  <>
    <HeroSection>
      <Container>
        <Header />
      </Container>

      <Wrapper>
        <Container>
          <Heading color="primary" size="large">
            Lojinha milionária
          </Heading>

          <Grid>
            <NSNPreview name="333" price="1" image={NSNExample} />
            <NSNPreview name="888" price="2" image={NSNExample} />
            <NSNPreview name="999" price="0.5" image={NSNExample} />
          </Grid>
        </Container>
      </Wrapper>
    </HeroSection>

    <Footer />
  </>
)
