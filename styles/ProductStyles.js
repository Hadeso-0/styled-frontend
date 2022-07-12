import styled from 'styled-components'
const { motion } = require('framer-motion')

export const ProductStyle = styled(motion.div)`
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  h2 {
    padding: 0.5rem 0rem;
  }
  img {
    height: 240px;
    width: 100%;
    cursor: pointer;
    object-fit: cover;
    background-position: center;
  }
`
