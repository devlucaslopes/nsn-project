import styled, { keyframes } from 'styled-components'

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
  width: 50%;
  right: 0;
  top: 0;

  #box-circle {
    transform-origin: 50% 50%;
    animation: ${fadeIn} 3s ease-in-out alternate infinite;
  }
`
