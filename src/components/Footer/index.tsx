import { FiHeart } from 'react-icons/fi'

import { Container } from '../Container'

import { Wrapper } from './styles'

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        Criado com <FiHeart size={18} /> por @devlucaslopes
      </Container>
    </Wrapper>
  )
}
