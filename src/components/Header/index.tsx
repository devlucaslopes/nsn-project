import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Button } from '../Button'
import { Logo } from '../Logo'

import { LogoWrapper, MenuButton, Wrapper, Navigation } from './styles'

export const Header = () => {
  return (
    <Wrapper>
      <MenuButton type="button">
        <FiMenu size={24} />
      </MenuButton>

      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <Navigation>
        <ul>
          <li>
            <a href="#">Como funciona</a>
          </li>
          <li>
            <a href="#">Quem é esse doido?</a>
          </li>
          <li>
            <Link to="lojinha">Lojinha</Link>
          </li>
        </ul>

        <div>
          <Button href="#">Entrar</Button>
        </div>
      </Navigation>
    </Wrapper>
  )
}
