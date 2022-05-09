import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Heading } from '../../components/Heading'
import { HeroSection } from '../../components/HeroSection'

import NSNExample from '../../assets/monalisa.png'
import IconBugCoins from '../../assets/bugcoins.svg'

import { Grid, NSNPreview, Wrapper } from './styles'

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
            <NSNPreview>
              <img src={NSNExample} />
              <div>
                <span>NSN#333</span>
                <span>1K</span>
              </div>
            </NSNPreview>
            <NSNPreview>
              <img src={NSNExample} />
            </NSNPreview>
          </Grid>
        </Container>
      </Wrapper>
    </HeroSection>

    <Footer />
  </>
)
