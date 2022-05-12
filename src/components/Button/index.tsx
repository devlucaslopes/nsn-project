import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import { Btn } from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = {
  children: React.ReactNode
  as?: React.ElementType
} & ButtonTypes

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <Btn {...rest}>{children}</Btn>
}
