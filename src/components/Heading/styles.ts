import styled, { css } from 'styled-components'
import { HeadingColors, HeadingSizes } from '.'

type TitleProps = {
  color: HeadingColors
  size: HeadingSizes
}

export const Title = styled.h2<TitleProps>`
  ${({ theme, color, size }) => css`
    font-size: ${size === 'normal'
      ? theme.fonts.sizes.h4
      : theme.fonts.sizes.h3};
    color: ${color === 'white'
      ? theme.colors.white
      : theme.colors.primary['300']};
    text-align: center;
  `}
`
