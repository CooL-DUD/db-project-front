import db from "~/server/utils/db.js";
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const games = await db.query('INSERT INTO games (title, description, user_id) VALUES ($1, $2, $3) RETURNING *', [body.title, body.description, body.user_id])
    return games.rows[0]
})