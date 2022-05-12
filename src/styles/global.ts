import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-size: ${theme.fonts.sizes.normal};
      font-family: ${theme.fonts.family.body};
      background: ${theme.colors.gray['400']};
      color: ${theme.colors.white};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${theme.fonts.family.headings};
      font-weight: normal;
    }

    svg,
    img {
      width: 100%;
    }

    ul {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.white};
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
    }
  `}
`
