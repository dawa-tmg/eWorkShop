import knex from "knex";
import knexConfig from "@/knexfile"

const kn = knex(knexConfig.development);

export async function GET(){
    const mechanics = await kn('mechanic').select('*')
    return Response.json({mechanics})
}

export async function POST(req:Request) {
    const { name, email, phone, specialization, description, availability } = await req.json();

    const [ addMechanic ] = await kn('mechanic').insert({name, email, phone, specialization, description, availability}).returning('*');
    return Response.json({ addMechanic })
}
