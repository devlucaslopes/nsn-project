import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import { Btn } from './styles'

export type ButtonVariants = 'default' | 'outline'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = {
  children: React.ReactNode
  as?: React.ElementType
  variant?: ButtonVariants
} & ButtonTypes

export const Button = ({
  children,
  variant = 'default',
  ...rest
}: ButtonProps) => {
  return (
    <Btn variant={variant} {...rest}>
      {children}
    </Btn>
  )
}
