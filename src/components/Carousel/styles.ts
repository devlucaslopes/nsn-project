import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .swiper-button-next,
    .swiper-button-prev {
      color: ${theme.colors.primary['300']};
    }

    .swiper-button-next {
      filter: drop-shadow(-8px 0px 4px #000);
    }

    .swiper-button-prev {
      filter: drop-shadow(8px 0px 4px #000);
    }
  `}
`

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
      margin-bottom: ${theme.spacings.normal};
    }

    &::after {
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(1, 1, 1, 0.2);
    }

    ${media.greaterThan('large')`
      width: 33.6rem;
      height: 33.6rem;
    `}
  `}
`
