import styled, { css } from 'styled-components'

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
  `}
`

export const NSNPreview = styled.div`
  ${({ theme }) => css`
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: ${theme.spacings.normal};

      span {
        font-size: ${theme.fonts.sizes.medium};
        font-family: ${theme.fonts.family.headings};
      }
    }
  `}
`
