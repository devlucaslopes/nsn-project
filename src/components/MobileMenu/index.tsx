import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'

import { Logo } from '../Logo'

import { Wrapper, LogoWrapper, CloseButton } from './styles'

interface MobileMenuProps {
  onClose: () => void
}

export const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <Wrapper>
      <CloseButton type="button" onClick={onClose}>
        <FiX size={32} />
      </CloseButton>

      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <nav>
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
      </nav>
    </Wrapper>
  )
}
