import { ProductStyle } from '../styles/ProductStyles'
import Link from 'next/link'
const { motion } = require('framer-motion')

const card = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

export default function Product({ product }) {
  const { title, slug, price, image } = product.attributes
  return (
    <ProductStyle variants={card} layout>
      <Link href={`/product/${slug}`}>
        <motion.div layoutId={title}>
          <img src={image.data.attributes.formats.small.url} alt="" />
        </motion.div>
      </Link>
      <h2>{title}</h2>
      <h3>{`$ ${price}`}</h3>
    </ProductStyle>
  )
}
