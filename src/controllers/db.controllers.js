import path from 'path'
import fs from 'fs'
import {dbpool} from '../db/connection.js'
import { DB_DATABASE } from '../db/config.js';

import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const createModel = async (req, res) => {
    const script = fs.readFileSync(path.join(__dirname, '../db/database.sql'), 'utf8')
    const queries = script.split(';').map(query => query.trim())
    for (let i = 0; i < queries.length-1; i++) {
        await dbpool.query(queries[i])
    }
    res.send('Creacion de bases de datos finalizada')
}

export const deleteModel = async (req, res) => {
    await dbpool.query(`DROP DATABASE ${DB_DATABASE}`);
    res.send('Base de datos eliminada')
}

export const loadData = async (req, res) => {
    const csv = path.join(__dirname, '../../TSEdatasets/votaciones.csv')
    const rows = fs.readFileSync(csv, 'utf8').split('\n')
    for (let i = 1; i<rows.length-1; i++) {
        const fields = rows[i].split(',')
        console.log(fields[0],fields[1],fields[2],fields[3],fields[4])
    }
}
