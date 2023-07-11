// server here
import Express from 'express'
import cors from 'cors'

import usersRouter from './routers/users'
import productsRouter from './routers/products'
import orderRouter from './routers/order'
import apiErrorHandler from './middlewares/apiErrorHandler'

const app =Express()
app.use(Express.json())
app.use(cors())

app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/order' ,orderRouter)

app.use(apiErrorHandler)


export default app