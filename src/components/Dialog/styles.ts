import styled, { css } from 'styled-components'

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${theme.spacings.normal};
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;
    padding: ${theme.spacings.xlarge};
    background: ${theme.colors.white};
    color: ${theme.colors.gray['300']};
    text-align: center;

    h2 {
      font-size: ${theme.fonts.sizes.h4};
    }

    p {
      margin: ${theme.spacings.small} 0 ${theme.spacings.normal} 0;
    }

    button + button {
      margin-top: ${theme.spacings.normal};
    }
  `}
`
