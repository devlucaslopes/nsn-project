import styled, { css, keyframes } from 'styled-components'
import media from 'styled-media-query'

import * as ContainerStyles from '../../components/Container/styles'
import * as HeadingStyles from '../../components/Heading/styles'

export const Hero = styled.main`
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const fadeIn = keyframes`
  0% {
    fill-opacity: 0.1;
    transform: scale(0.5)
  }
  100% {
    fill-opacity: 0.2;
    transform: scale(1);
  }
`

export const HeroCircleWrapper = styled.div`
  position: absolute;
  width: 150%;
  height: 100%;
  left: -30%;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  ${media.greaterThan('large')`
    position: absolute;
    width: 50%;
    left: auto;
    right: 0;
    top: 0;
    transform: translateY(0);
  `}

  #box-circle {
    fill-opacity: 0.1;
    transform: scale(0.5);
    transform-origin: 50% 50%;
    animation: ${fadeIn} 7s ease 3s alternate infinite;
  }
`

export const CallToActionWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 100%;

    h1 {
      font-size: ${theme.fonts.sizes.h4};
    }

    p {
      font-size: ${theme.fonts.sizes.medium};
      margin: ${theme.spacings.medium} 0 ${theme.spacings.xlarge};

      span {
        color: ${theme.colors.primary['300']};
      }
    }

    img {
      display: none;
      width: 48rem;
      height: auto;
    }

    ${ContainerStyles.Wrapper} {
      display: flex;
      align-items: center;
      gap: ${`calc(${theme.spacings.huge} * 2)`};
    }

    ${media.greaterThan('large')`
      h1 {
        font-size: ${theme.fonts.sizes.h1};
      }

      p {
        font-size: ${theme.fonts.sizes.large};
      }

      img {
        display: block;
      }
    `}
  `}
`

export const NextSection = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 3.2rem;
    left: 0;
    right: 0;

    a {
      z-index: ${theme.layers.overlay};
      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${theme.colors.gray['100']};
      cursor: pointer;
    }

    ${media.greaterThan('large')`
      display: none;
    `}
  `}
`

const Section = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.huge} 0;

    ${HeadingStyles.Title} {
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`

export const LastReleases = styled(Section)``

export const HowWorks = styled(Section)`
  ${({ theme }) => css`
    ${HeadingStyles.Title} {
      text-align: left;
    }

    ${ContainerStyles.Wrapper} {
      display: grid;
      grid-template-rows: auto 1fr;
      gap: ${theme.spacings.xlarge};
      font-size: ${theme.fonts.sizes.medium};
    }

    > div {
      p + p {
        margin-top: ${theme.spacings.medium};
      }

      a {
        margin-top: ${theme.spacings.large};
      }
    }

    ${media.greaterThan('large')`
      ${ContainerStyles.Wrapper} {
        grid-template-columns: 1fr 1fr;
      }

      > div {
        display: flex;
        align-items: center;
      }
    `}
  `}
`

export const Presentation = styled(Section)`
  ${({ theme }) => css`
    ${HeadingStyles.Title} {
      text-align: left;
    }

    ${ContainerStyles.Wrapper} {
      display: grid;
      grid-template-rows: 1fr auto;
      gap: ${theme.spacings.xlarge};
      font-size: ${theme.fonts.sizes.medium};
    }

    > div {
      p + p {
        margin-top: ${theme.spacings.medium};
      }

      a {
        margin-top: ${theme.spacings.large};
      }
    }

    ${media.greaterThan('large')`
      ${ContainerStyles.Wrapper} {
        grid-template-columns: 1fr 1fr;
      }

      > div {
        display: flex;
        align-items: center;
      }
    `}
  `}
`
