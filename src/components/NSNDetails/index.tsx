import { Button } from '../Button'
import { IconBugcoins } from '../IconBugcoins'

import { Wrapper, NameAndPrice } from './styles'

interface NSNDetailsProps {
  name: string
  price: string
  image: string
  description?: string
  toggleDialog: () => void
}

export const NSNDetails = ({
  name,
  price,
  image,
  description,
  toggleDialog
}: NSNDetailsProps) => {
  return (
    <>
      <Wrapper>
        <img src={image} />

        <div>
          <NameAndPrice>
            <span>{`NSN#${name}`}</span>
            <span>
              <IconBugcoins /> {`${price}K`}
            </span>
          </NameAndPrice>

          {description && <p>{description}</p>}

          <Button as="button" type="button" onClick={toggleDialog}>
            Comprar agora
          </Button>
        </div>
      </Wrapper>
    </>
  )
}
