import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
  display:
    margin-top: ${theme.spacings.xxlarge};

    a {
      display: block;
      margin-top: ${theme.spacings.medium};
    }
  `}
`
