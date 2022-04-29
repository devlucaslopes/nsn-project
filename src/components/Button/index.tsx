import { AnchorHTMLAttributes } from 'react'

import { Btn } from './styles'

type ButtonProps = {
  children: React.ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <Btn {...rest}>{children}</Btn>
}
