import { model, Schema } from 'mongoose'
import { TCategory } from './category.interface'

const CategorySchema = new Schema<TCategory>(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
  },
  { timestamps: true },
)

const Category = model('Category', CategorySchema)

export default Category
