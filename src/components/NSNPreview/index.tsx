import { IconBugcoins } from '../IconBugcoins'

import { Wrapper, Link } from './styles'

interface NSNPreviewProps {
  name: string
  price: string
  image: string
}

export const NSNPreview = ({ name, price, image }: NSNPreviewProps) => {
  return (
    <Link to="/nsn-3333">
      <Wrapper>
        <img src={image} />
        <div>
          <span>{`NSN#${name}`}</span>
          <span>
            <IconBugcoins /> {`${price}K`}
          </span>
        </div>
      </Wrapper>
    </Link>
  )
}
