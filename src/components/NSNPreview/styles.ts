import styled, { css } from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Link = styled(LinkRouter)`
  img {
    transition: filter 0.3s ease;
  }

  &:hover {
    img {
      filter: brightness(0.5);
    }
  }
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: ${theme.spacings.small};

      span {
        display: flex;
        align-items: center;
        font-size: ${theme.fonts.sizes.medium};
        font-family: ${theme.fonts.family.headings};
      }

      svg {
        width: 1.6rem;
        height: 1.6rem;
        margin-right: 0.8rem;
      }
    }
  `}
`
