import styled, { css } from 'styled-components'

export const Btn = styled.a`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    padding: ${theme.spacings.normal} 0;
    background: ${theme.colors.primary['300']};
    text-align: center;
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.black};
    transition: all 0.3s ease;

    &:hover {
      background: ${theme.colors.primary['400']};
      color: ${theme.colors.primary['100']};
      filter: drop-shadow(0px 4px 77px rgba(207, 240, 226, 0.07));
    }
  `}
`
