import styled, { keyframes } from 'styled-components'

const drawing = keyframes`
  0% {
    fill-opacity: 0;
    stroke-width: 1;
    stroke-dasharray: 1 1000;
    stroke-dashoffset: 50;
  }
  97% {
    fill-opacity: 0;
    stroke-width: 1;
    stroke-dasharray: 200 1;
    stroke-dashoffset: 0;
  }
  100% {
    fill-opacity: 1;
  }
`

export const Letters = styled.path`
  animation: ${drawing} 3s ease forwards;
`

export const Dots = styled.path`
  animation: ${drawing} 3s ease forwards;
`
