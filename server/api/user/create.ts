import db from "~/server/utils/db.js";
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const user = await db.query('INSERT INTO users (name, surname, email, password) VALUES ($1, $2, $3, $4) RETURNING *', [body.name, body.surname, body.email, body.password])
    return {status: 200, body: {
        token: user.rows[0].id,
        name: user.rows[0].name,
        }}
})