import knex from "knex";
import knexConfig from "@/knexfile"

const kn = knex(knexConfig.development)

export async function GET() {
    const bookings = await kn('booking').select('*');
    return Response.json({ bookings })
}

export async function POST(req:Request){
    const { service_id, name, phone, vehicle, appointment_date, mechanic_id } = await req.json();
    const [] = await kn('booking').insert({ service_id, name, phone, vehicle, appointment_date, mechanic_id }).returning('*')
    return Response.json({})
}