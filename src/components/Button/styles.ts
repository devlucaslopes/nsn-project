import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonVariants } from '.'

type BtnProps = {
  variant: ButtonVariants
}

const getVariant = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
    background: ${theme.colors.primary['300']};

    &:hover {
      background: ${theme.colors.primary['400']};
      color: ${theme.colors.primary['100']};
      filter: drop-shadow(0px 4px 77px rgba(207, 240, 226, 0.07));
    }
  `,
  outline: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray['100']};
    background: none;
    border: 1px solid ${theme.colors.gray['100']};

    &:hover {
      border-color: ${theme.colors.gray['300']};
      color: ${theme.colors.gray['300']};
    }
  `
}

export const Btn = styled.a<BtnProps>`
  ${({ theme, variant }) => css`
    display: block;
    width: 100%;
    padding: ${theme.spacings.normal} 0;
    text-align: center;
    font-size: ${theme.fonts.sizes.medium};
    cursor: pointer;
    transition: all 0.3s ease;

    ${getVariant[variant](theme)};
  `}
`
