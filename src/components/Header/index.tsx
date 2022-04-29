import { FiMenu } from 'react-icons/fi'

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
            <a href="#">Lojinha</a>
          </li>
        </ul>
      </Navigation>
    </Wrapper>
  )
}
