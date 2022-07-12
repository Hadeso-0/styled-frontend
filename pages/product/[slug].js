import { useQuery } from 'urql'
import { GET_PRODUCT_QUERY } from '../../lib/query'
import { useRouter } from 'next/router'
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
  ProductImage,
} from '../../styles/ProductDetails'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { useStateContext } from '../../lib/context'
import toast from 'react-hot-toast'

export default function ProductDetails() {
  const { query } = useRouter()

  // Fetch GraphQL data
  const [result] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  })

  const { data, fetching, error } = result

  // Import Context StateContext
  const { qty, increaseQty, decreaseQty, onAdd } = useStateContext()

  if (fetching) {
    return <p>Fetching...</p>
  }
  if (error) {
    return <p>Facing an Error: {error.message}</p>
  }

  const { title, description, image } = data.products.data[0].attributes
  const notify = () => {
    toast.success(`${title} added to your cart`, { duration: 1500 })
  }
  return (
    <DetailsStyle>
      <ProductImage layoutId={title}>
        <img src={image.data.attributes.formats.medium.url} alt={title} />
      </ProductImage>
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button onClick={decreaseQty}>
            <AiFillMinusCircle />
          </button>
          <p>{qty}</p>
          <button onClick={increaseQty}>
            <AiFillPlusCircle />
          </button>
        </Quantity>
        <Buy onClick={() => onAdd(data.products.data[0].attributes, qty)}>
          Add to cart
        </Buy>
      </ProductInfo>
    </DetailsStyle>
  )
}
