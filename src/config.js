import {config} from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
export const __dirname = path.dirname(fileURLToPath(import.meta.url)) + '/src'

config()

export const PORT = process.env.PORT
export const DB_USER = process.env.DB_USER
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_HOST = process.env.DB_HOST
export const DB_PORT = process.env.DB_PORT
export const DB_DATABASE = process.env.DB_DATABASE
