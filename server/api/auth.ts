import db from "~/server/utils/db.js";
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const user = await db.query('SELECT * FROM users WHERE email = $1 AND password = $2', [body.email, body.password])
    return {
        status: 200,
        body: {
            token: user.rows[0].id,
            name: user.rows[0].name,
        }}
})