import styled, { css } from 'styled-components'
import media from 'styled-media-query'

interface SlideProps {
  backgroundURL: string
}

export const Slide = styled.div<SlideProps>`
  ${({ theme, backgroundURL }) => css`
    position: relative;
    width: 16.4rem;
    height: 16.4rem;
    background: url(${backgroundURL}) no-repeat center center;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    span {
      position: relative;
      z-index: ${theme.layers.overlay};
    }

    &::after {
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(1, 1, 1, 0.1);
    }

    ${media.greaterThan('large')`
      width: 33.6rem;
      height: 33.6rem;
    `}
  `}
`
