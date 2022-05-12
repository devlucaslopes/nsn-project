import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { NSNDetails } from '../../components/NSNDetails'

import NSNExample from '../../assets/monalisa.png'

import { Content, Wrapper } from './styles'
import { Dialog } from '../../components/Dialog'
import { useDialog } from '../../hooks/useDialog'

export const NSN = () => {
  const { isOpen, toggleDialog } = useDialog()

  return (
    <Wrapper>
      <Container>
        <Header />
      </Container>

      <Container>
        <Content>
          <NSNDetails
            name="333"
            price="1"
            image={NSNExample}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            hendrerit ipsum a mauris pretium accumsan."
            toggleDialog={toggleDialog}
          />
        </Content>
      </Container>

      {isOpen && <Dialog />}
    </Wrapper>
  )
}
