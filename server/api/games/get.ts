import db from "~/server/utils/db.js";
export default defineEventHandler(async () => {
    // const body = await readBody(event)
    // console.log(event.context.params.id)
    const games = await db.query('SELECT * FROM games')
    return games.rows
})