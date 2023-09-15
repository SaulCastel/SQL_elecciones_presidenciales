import {createPool} from 'mysql2/promise'
import * as env from './config.js'

export const dbpool = createPool({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    port: env.DB_PORT,
    database: env.DB_DATABASE
})
