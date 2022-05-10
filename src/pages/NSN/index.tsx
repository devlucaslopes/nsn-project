import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { NSNPreview } from '../../components/NSNPreview'

import NSNExample from '../../assets/monalisa.png'

import { Content, Wrapper } from './styles'
import { Button } from '../../components/Button'

export const NSN = () => (
  <Wrapper>
    <Container>
      <Header />
    </Container>

    <Container>
      <Content>
        <NSNPreview
          name="333"
          price="1"
          image={NSNExample}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          hendrerit ipsum a mauris pretium accumsan."
        />

        <Button>Comprar agora</Button>
      </Content>
    </Container>
  </Wrapper>
)
