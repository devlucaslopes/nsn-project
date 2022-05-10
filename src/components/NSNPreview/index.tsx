import { IconBugcoins } from '../IconBugcoins'

import { Wrapper, Link } from './styles'

interface NSNPreviewProps {
  name: string
  price: string
  image: string
  description?: string
}

export const NSNPreview = ({
  name,
  price,
  image,
  description
}: NSNPreviewProps) => {
  return (
    <Link to={`nsn-${name}`}>
      <Wrapper>
        <img src={image} />
        <div>
          <span>{`NSN#${name}`}</span>
          <span>
            <IconBugcoins /> {`${price}K`}
          </span>
        </div>

        {description && <p>{description}</p>}
      </Wrapper>
    </Link>
  )
}
