import styled, { css, keyframes } from 'styled-components'

export const CloseButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 1.6rem;
    border: 0;
    background: none;

    svg {
      color: ${theme.colors.white};
    }
  `}
`

const bottomUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    height: 100vh;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.spacings.huge};

    background: ${theme.colors.gray['400']};
    z-index: ${theme.layers.alwaysOnTop};

    animation: ${bottomUp} 0.3s ease 0s forwards;

    a {
      display: block;
      color: ${theme.colors.gray['200']};
      font-size: ${theme.fonts.sizes.large};
      text-align: center;
      transition: color 0.3s ease;

      &:hover {
        color: ${theme.colors.white};
      }
    }

    li + li {
      margin-top: ${theme.spacings.small};
    }
  `}
`

export const LogoWrapper = styled.div`
  width: 20rem;
`
