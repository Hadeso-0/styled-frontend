import Link from 'next/link'
import { FiShoppingBag } from 'react-icons/fi'
import { useStateContext } from '../lib/context'
import { NavStyles, NavItems } from '../styles/navStyles'
import { useUser } from '@auth0/nextjs-auth0'
import Cart from './cart'
import User from './user'
const { AnimatePresence, motion } = require('framer-motion')

export default function Nav() {
  const { cartOpen, setCartOpen, totalQty } = useStateContext()
  return (
    <NavStyles>
      <Link href={'/'}>Styled.</Link>
      <NavItems>
        <User />
        <div onClick={() => setCartOpen(true)}>
          {totalQty > 0 && (
            <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
              {totalQty}
            </motion.span>
          )}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <AnimatePresence>{cartOpen ? <Cart /> : ''}</AnimatePresence>
    </NavStyles>
  )
}
