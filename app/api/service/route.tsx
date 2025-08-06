import knex from "knex";
import knexConfig from "@/knexfile"

const kn = knex(knexConfig.development);

export async function GET() {
    const services = await kn('service').select('*')
    return Response.json({services})
}

export async function POST(req: Request){
    const { name, description, price, duration } = await req.json();
    
    const [ addService ] = await kn('service').insert({ name, description, price, duration }).returning('*');
    return Response.json({addService})
}