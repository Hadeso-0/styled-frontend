import styled from 'styled-components'
const { motion } = require('framer-motion')

export const CartWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  /* display: none; */
`

export const CartStyle = styled(motion.div)`
  background: #f1f1f1;
  padding: 2rem;
  overflow-y: auto;
  position: relative;
`

export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.4rem;
  overflow: hidden;
  background: white;
  padding: 1rem;
  margin: 1.2rem 0;
  img {
    border-radius: 0.1rem;
    height: 7rem;
    width: 7rem;
    object-fit: cover;
    background-position: center;
  }
`

export const CardInfo = styled(motion.div)`
  width: 50%;
  margin-left: 2rem;
  div {
    display: flex;
    flex-direction: space-between;
  }
`
export const EmptyStyle = styled(motion.div)`
  position: relative;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, 0);
  text-align: center;
  svg {
    font-size: 10rem;
    color: var(--secondary);
  }
  h1 {
    font-size: 1.6rem;
    padding: 2rem 0;
  }
`
export const Checkout = styled(motion.div)`
  margin-top: 1rem;
  button {
    background: var(--primary);
    padding: 1rem 2rem;
    width: 100%;
    color: white;
    margin-top: 0.6rem;
    cursor: pointer;
    border: none;
    outline: none;
  }
`

export const Cards = styled(motion.div)``
