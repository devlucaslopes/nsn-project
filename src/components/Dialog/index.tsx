import { Button } from '../Button'

import { Overlay, Wrapper } from './styles'

export const Dialog = () => {
  return (
    <Overlay>
      <Wrapper>
        <h2>Confirmar compra</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          hendrerit ipsum a mauris pretium accumsan.
        </p>

        <Button as="button" type="button">
          Comprar
        </Button>

        <Button as="button" type="button">
          Cancelar
        </Button>
      </Wrapper>
    </Overlay>
  )
}
