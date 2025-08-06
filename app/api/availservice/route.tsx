import knex from "knex";
import knexConfig from "@/knexfile"

const kn = knex(knexConfig.development);

export async function GET() {
    const response = await kn('avail_service').select('*')
    return Response.json({response})
}

export async function POST(req:Request) {
    const {service_id, name, vehicle } = await req.json()

    const [ bookService ] = await kn('avail_service').insert({service_id, name, vehicle }).returning('*')
    return Response.json({ bookService })
}