import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: ${theme.container};
    margin: 0 auto;
    padding: 0 ${theme.spacings.normal};

    ${media.greaterThan('huge')`
      padding: 0;
    `}
  `}
`
