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

export const NSNPreview = styled.div`
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
