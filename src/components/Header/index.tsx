import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Button } from '../Button'
import { Logo } from '../Logo'
import { MobileMenu } from '../MobileMenu'

import { LogoWrapper, MenuButton, Wrapper, Navigation } from './styles'

export const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu)
  }

  return (
    <>
      <Wrapper>
        <MenuButton type="button" onClick={toggleMobileMenu}>
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

      {openMobileMenu && <MobileMenu onClose={toggleMobileMenu} />}
    </>
  )
}
