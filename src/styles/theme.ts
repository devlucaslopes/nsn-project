export const theme = {
  container: '141.6rem',
  colors: {
    primary: {
      100: '#CFF0E2',
      200: '#74CFA7',
      300: '#1EA86C',
      400: '#214334',
      500: '#010101'
    },
    gray: {
      100: '#D0D0D0',
      200: '#737373',
      300: '#161616',
      400: '#0B0B0B'
    },
    black: '#000000',
    white: '#FFFFFF'
  },
  fonts: {
    family: {
      headings: 'Share Tech Mono',
      body: 'Roboto'
    },
    sizes: {
      normal: '1.6rem',
      medium: '1.8rem',
      large: '2.4rem',
      h1: '9.6rem',
      h2: '6.4rem',
      h3: '4.8rem',
      h4: '3.2rem'
    }
  },
  spacings: {
    small: '1.2rem',
    normal: '1.6rem',
    medium: '1.8rem',
    large: '2.4rem',
    xlarge: '3.2rem',
    xxlarge: '4.8rem',
    huge: '6.4rem'
  },
  layers: {
    base: '0',
    overlay: '1',
    alwaysOnTop: '2'
  }
} as const
