import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.normal} 0;

    ${media.greaterThan('large')`
      justify-content: space-between;
    `}
  `}
`

export const LogoWrapper = styled.div`
  width: 10rem;
  height: 2rem;
  margin: 0 auto;

  ${media.greaterThan('large')`
    margin: 0;
  `}
`

export const MenuButton = styled.button`
  ${({ theme }) => css`
    background: transparent;
    border: 0;
    color: ${theme.colors.primary['300']};
    display: block;

    ${media.greaterThan('large')`
      display: none;
    `}
  `}
`

export const Navigation = styled.nav`
  ${({ theme }) => css`
    display: none;

    ul {
      display: flex;
      align-items: center;
      gap: ${theme.spacings.xlarge};
    }

    ${media.greaterThan('large')`
      display: block;
    `}
  `}
`
