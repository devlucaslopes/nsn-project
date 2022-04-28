import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.container};
    margin: 0 auto;
    padding: 0 ${theme.spacings.normal};
    background: #ccc;
  `}
`
