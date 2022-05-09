import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 0;
  `}
`

export const Grid = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.normal};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr);
    `}
  `}
`
