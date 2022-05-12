import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    p {
      margin-top: ${theme.spacings.normal};
    }

    ${media.greaterThan('large')`
      display: flex;
      align-items: center;
      gap: ${theme.spacings.xlarge};

      img {
        flex: 1;
      }

      div {
        flex: 1;
      }

    `}
  `}
`

export const NameAndPrice = styled.div`
  ${({ theme }) => css`
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

    ${media.greaterThan('large')`
      span {
        font-size: ${theme.fonts.sizes.h4};
      }
    `}
  `}
`
