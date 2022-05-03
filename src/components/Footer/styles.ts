import styled, { css } from 'styled-components'

import * as ContainerStyles from '../Container/styles'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary['300']};
    color: ${theme.colors.black};
    padding: 1.2rem 0;

    ${ContainerStyles.Wrapper} {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: auto;
        margin: 0 0.5rem;
      }
    }
  `}
`
