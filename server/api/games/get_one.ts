import db from "~/server/utils/db.js";
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log(body)
    const game = await db.query('SELECT * FROM games WHERE id = $1', [1])
    return { game }
})