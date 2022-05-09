import styled, { css } from 'styled-components'

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
