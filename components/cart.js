import { useStateContext } from '../lib/context'
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
  Checkout,
  Cards,
} from '../styles/cartStyles'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { Quantity } from '../styles/ProductDetails'
import getStripe from '../lib/getStripe'

const card = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
}

const cards = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.1 },
  },
}

export default function Cart() {
  const { cart, setCartOpen, onAdd, onRemove, totalPrice } = useStateContext()

  // Payments
  const handleCheckout = async () => {
    const stripe = await getStripe()
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cart),
    })
    const data = await response.json()
    await stripe.redirectToCheckout({ sessionId: data.id })
  }

  return (
    <CartWrapper
      onClick={() => setCartOpen(false)}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <CartStyle
        onClick={(e) => e.stopPropagation()}
        animate={{ x: '0' }}
        initial={{ x: '50%' }}
        exit={{ x: '50%' }}
        transition={{ type: 'tween' }}
      >
        {cart.length < 1 && (
          <EmptyStyle
            animate={{ opacity: 1, scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.7 }}
            transition={{ delay: 0.2 }}
          >
            <h1>You have more Shopping to do 😜</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        <Cards variants={cards} initial="hidden" animate="show" layout>
          {cart.length > 0 &&
            cart.map((item) => (
              <Card key={item.slug} variants={card} layout>
                <img
                  src={item.image.data.attributes.formats.thumbnail.url}
                  alt={item.title}
                />
                <CardInfo>
                  <h1>{item.title}</h1>
                  <h3>{item.price}</h3>
                  <Quantity>
                    <span>Quantity</span>
                    <button onClick={() => onRemove(item)}>
                      <AiFillMinusCircle />
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => onAdd(item, 1)}>
                      <AiFillPlusCircle />
                    </button>
                  </Quantity>
                </CardInfo>
              </Card>
            ))}
        </Cards>
        {cart.length > 0 && (
          <Checkout layout>
            <h3>{`Subtotal: $${totalPrice}`}</h3>
            <button onClick={() => handleCheckout()}>Purchase</button>
          </Checkout>
        )}
      </CartStyle>
    </CartWrapper>
  )
}
