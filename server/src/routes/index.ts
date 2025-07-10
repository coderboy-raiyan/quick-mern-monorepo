import { Router } from 'express'
import CategoryRoutes from '../modules/category/category.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/',
    route: CategoryRoutes,
  },
]

moduleRoutes.forEach(({ path, route }) => {
  router.use(path, route)
})

export default router
