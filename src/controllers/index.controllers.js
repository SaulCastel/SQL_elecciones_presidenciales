import {dbpool} from '../db/connection.js'

export const ping = async (req, res) => {
    const [result] = await dbpool.query('SELECT "pong" AS result')
    res.json(result[0])
}
