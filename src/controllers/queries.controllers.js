import { createConnection } from 'mysql2/promise';
import {db} from '../db/connection.js'
import path from 'path'
import fs from 'fs'
import {__dirname} from '../config.js'

const getQuery = (num) => {
    const script = fs.readFileSync(path.join(__dirname,`../db/queries/query${num}.sql`), 'utf-8')
    return script.split(';')[0].trim()
}

export const query11 = async (req, res) => {
    const conn = await createConnection(db)
    const [result] = await conn.query(getQuery(11))
    await conn.end()
    res.send(result)
}

export const query10 = async (req, res) => {
    const conn = await createConnection(db)
    const [result] = await conn.query(getQuery(10))
    await conn.end()
    res.send(result)
}

export const query9 = async (req, res) => {
    const conn = await createConnection(db)
    const [result] = await conn.query(getQuery(9))
    await conn.end()
    res.send(result)
}

export const query8 = async (req, res) => {
    const conn = await createConnection(db)
    const [result] = await conn.query(getQuery(8))
    await conn.end()
    res.send(result)
}


export const query7 = async (req, res) => {
    const conn = await createConnection(db)
    const [result] = await conn.query(getQuery(7))
    await conn.end()
    res.send(result)
}

export const query6 = async (req, res) => {
    const conn = await createConnection(db)
    const [result] = await conn.query(getQuery(6))
    await conn.end()
    res.send(result)
}

export const query5 = async (req, res) => {
    const conn = await createConnection(db)
    const [result] = await conn.query(getQuery(5))
    await conn.end()
    res.send(result)
}

export const query4 = async (req, res) => {
    const conn = await createConnection(db)
    const [result] = await conn.query(getQuery(4))
    await conn.end()
    res.send(result)
}

export const query3 = async (req, res) => {
    const conn = await createConnection(db)
    const [result] = await conn.query(getQuery(3))
    await conn.end()
    res.send(result)
}

export const query2 = async (req, res) => {
    const conn = await createConnection(db)
    const [result] = await conn.query(getQuery(2))
    await conn.end()
    res.send(result)
}

export const query1 = async (req, res) => {
    const conn = await createConnection(db)
    const [result] = await conn.query(getQuery(1))
    await conn.end()
    res.send(result)
}