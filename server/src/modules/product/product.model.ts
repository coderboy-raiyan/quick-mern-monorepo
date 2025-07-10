import { Schema } from 'mongoose'
import { TProduct } from './product.interface'

const ProductSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

export default ProductSchema
