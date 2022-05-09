import { IconBugcoins } from '../IconBugcoins'

import { Wrapper } from './styles'

interface NSNPreviewProps {
  name: string
  price: string
  image: string
}

export const NSNPreview = ({ name, price, image }: NSNPreviewProps) => {
  return (
    <Wrapper>
      <img src={image} />
      <div>
        <span>{`NSN#${name}`}</span>
        <span>
          <IconBugcoins /> {`${price}K`}
        </span>
      </div>
    </Wrapper>
  )
}
