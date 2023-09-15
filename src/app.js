import express from 'express'
import dbRoutes from './routes/db.routes.js'
import { PORT } from './db/config.js'

const app = express()

app.set('port', PORT)
app.use(express.json())
app.use(dbRoutes)

export default app
