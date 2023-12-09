// import { Client } from 'pg'
//
// const client = new Client({
//     user: "postgres",
//     password: "root",
//     host: "localhost",
//     port: "5432",
//     database: "db-project",
// })
//
// client.connect()

// export default client
const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: "5432",
    database: "db-project2",
})

module.exports = pool

/**********
 user
 id SERIAL,
 name VARCHAR(255),
 surname VARCHAR(255),
 email VARCHAR(255),
 **********/

/**********
 game
 id SERIAL,
 title VARCHAR(255),
 desc TEXT,
 rating DECIMAL(2, 1),
 images ???
 user_id FK,
 **********/

/**********
 comment
 id SERIAL,
 text TEXT,
 user_id FK,
 game_id FK,
 **********/