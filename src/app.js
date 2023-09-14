import express from 'express'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.set('port', 3000)
app.use(express.json())
app.use(indexRoutes)

export default app
