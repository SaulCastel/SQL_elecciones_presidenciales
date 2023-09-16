import * as env from '../config.js'

export const db = {
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    port: env.DB_PORT
}