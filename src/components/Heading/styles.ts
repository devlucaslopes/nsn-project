import styled, { css } from 'styled-components'
import { HeadingColors } from '.'

type TitleProps = {
  color: HeadingColors
}

export const Title = styled.h2<TitleProps>`
  ${({ theme, color }) => css`
    font-size: ${theme.fonts.sizes.h4};
    color: ${color === 'white'
      ? theme.colors.white
      : theme.colors.primary['300']};
    text-align: center;
  `}
`
