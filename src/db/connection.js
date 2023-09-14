import {createPool} from 'mysql2/promise'

export const dbpool = createPool({
    host: 'localhost',
    user: 'saulc',
    password: 'bases12s23',
    port: 3306,
    database: 'proy1bases1'
})
