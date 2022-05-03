import styled, { css } from 'styled-components'

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.h4};
    color: ${theme.colors.white};
    text-align: center;
  `}
`
