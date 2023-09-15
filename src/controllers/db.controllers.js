import path from 'path'
import fs from 'fs'
import { createConnection } from 'mysql2/promise';
import {db} from '../db/connection.js'
import { DB_DATABASE } from '../db/config.js';

import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const createModel = async (req, res) => {
    const script = fs.readFileSync(path.join(__dirname, '../db/database.sql'), 'utf8')
    const queries = script.split(';').map(query => query.trim())
    const conn = await createConnection(db)
    for (let i = 0; i < queries.length-1; i++) {
        await conn.query(queries[i])
    }
    await conn.end()
    res.send('Creacion de bases de datos finalizada')
}

export const deleteModel = async (req, res) => {
    const conn = await createConnection(db)
    await conn.query(`DROP DATABASE ${DB_DATABASE}`)
    await conn.end()
    res.send('Base de datos eliminada')
}

const getQueries = (table, params) => {
    let fieldOrder = ""
    let marks = ""
    for (const field of params) {
        fieldOrder += field + ','
        marks += '?,'
    }
    fieldOrder = fieldOrder.slice(0, -1)
    marks = marks.slice(0, -1)
    const temp = `INSERT INTO ${DB_DATABASE}.temp_${table} (${fieldOrder}) VALUES (${marks})`
    const final = `INSERT INTO ${DB_DATABASE}.${table} (${fieldOrder}) SELECT ${fieldOrder} FROM ${DB_DATABASE}.temp_${table}`
    return {temp: temp, final: final}
}

export const loadData = async (req, res) => {
    //crear todas las tablas temporales
    const script = fs.readFileSync(path.join(__dirname, '../db/temporary.sql'), 'utf8')
    const queries = script.split(';').map(query => query.trim())
    var conn = await createConnection(db)
    for (let i = 0; i < queries.length-1; i++) {
        await conn.query(queries[i])
    }
    let csv, rows, query

    //Cargar datos de tabla 'cargo'
    csv = path.join(__dirname, `../../TSEdatasets/cargos.csv`)
    rows = fs.readFileSync(csv, 'utf8').split('\n')
    query = getQueries('cargo',['id_cargo','cargo'])
    for (let i = 1; i<rows.length-1; i++) {
        const fields = rows[i].split(',').map(value => value.trim())
        await conn.query(query.temp,fields)
    }
    await conn.query(query.final)

    //Cargar datos de tabla 'departamento'
    csv = path.join(__dirname, `../../TSEdatasets/departamentos.csv`)
    rows = fs.readFileSync(csv, 'utf8').split('\n')
    query = getQueries('departamento',['id_dep','nombre'])
    for (let i = 1; i<rows.length-1; i++) {
        const fields = rows[i].split(',').map(value => value.trim())
        await conn.query(query.temp,fields)
    }
    await conn.query(query.final)

    //Cargar datos de tabla 'ciudadano'
    csv = path.join(__dirname, `../../TSEdatasets/ciudadanos.csv`)
    rows = fs.readFileSync(csv, 'utf8').split('\n')
    query = getQueries('ciudadano',['dpi','nombre','apellido','direccion','telefono','edad','genero'])
    for (let i = 1; i<rows.length-1; i++) {
        const fields = rows[i].split(',').map(value => value.trim())
        await conn.query(query.temp,fields.slice(0,7))
    }
    await conn.query(query.final)

    //Cargar datos de tabla 'partido'
    csv = path.join(__dirname, `../../TSEdatasets/partidos.csv`)
    rows = fs.readFileSync(csv, 'utf8').split('\n')
    query = getQueries('partido',['id_partido','nombre','siglas','fundacion'])
    for (let i = 1; i<rows.length-1; i++) {
        const fields = rows[i].trim().match(/(?=.+,?)([-0-9A-zÀ-ú/ ]+|"[^"]+"|)/g)
        //const fields = rows[i].split(',').map(value => value.trim())
        const date = fields[6].split('/')
        fields[6]= `${date[2]}-${date[1]}-${(date[0].length === 1) ? '0'+date[0]:date[0]}`
        await conn.query(query.temp,[fields[0],fields[2].replaceAll('"',''),fields[4],fields[6]])
    }
    await conn.query(query.final)

    await conn.end()
    res.send("Datos cargados en el modelo")
}
