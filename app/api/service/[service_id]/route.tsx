import knex from "knex";
import knexConfig from "@/knexfile"

const kn = knex(knexConfig.development);

export async function DELETE(req: Request, { params }:any) {
    const { service_id } = params;
  
    const deleteService = await kn('service').where({ service_id }).del();
  
    return Response.json({ deleteService });
  }
  