import { getSession } from 'next-auth/react'

export default async function data(req, res) {
    const session = await getSession({ req });
    console.log(session);
    if (session) {
        res.json({ "result": "succ" });
    } else {
        res.json({ "result": "fail" })
    }
}