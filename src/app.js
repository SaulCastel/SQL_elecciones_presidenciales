import express from 'express'
import dbRoutes from './routes/db.routes.js'
import querieRoutes from './routes/queries.routes.js'
import { PORT } from './config.js'

const app = express()

app.set('port', PORT)
app.use(express.json())
app.use(dbRoutes)
app.use(querieRoutes)

export default app
