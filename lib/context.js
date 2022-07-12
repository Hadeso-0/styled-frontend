import React, { createContext, useContext, useState } from 'react'

const ShopContext = createContext()

export const StateContext = ({ children }) => {
  // States
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [qty, setQty] = useState(1)
  const [totalQty, setTotalQty] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  //   Manage State
  const increaseQty = () => setQty((cur) => cur + 1)
  const decreaseQty = () => setQty((cur) => (cur > 1 ? cur - 1 : 1))

  const onAdd = (product, quantity) => {
    setTotalQty((cur) => cur + quantity)
    setTotalPrice((cur) => cur + quantity * product.price)
    const existing = cart.find((items) => items.slug === product.slug)
    if (existing) {
      setCart(
        cart.map((item) =>
          item.slug === product.slug
            ? { ...existing, quantity: existing.quantity + quantity }
            : item,
        ),
      )
    } else {
      setCart([...cart, { ...product, quantity: quantity }])
    }
    setQty(1)
  }
  const onRemove = (product) => {
    setTotalQty((cur) => cur - 1)
    setTotalPrice((cur) => cur - product.price)
    const existing = cart.find((items) => items.slug === product.slug)
    if (existing.quantity === 1) {
      setCart(cart.filter((item) => item.slug !== product.slug))
    } else {
      setCart(
        cart.map((item) =>
          item.slug === product.slug
            ? { ...existing, quantity: existing.quantity - 1 }
            : item,
        ),
      )
    }
  }

  return (
    <ShopContext.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        cartOpen,
        setCartOpen,
        cart,
        onAdd,
        onRemove,
        totalQty,
        totalPrice,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export const useStateContext = () => useContext(ShopContext)
