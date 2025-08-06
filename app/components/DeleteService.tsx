'use client'

import { MdDeleteForever, MdModeEdit } from "react-icons/md";

export default function DeleteService({service_id}:any) {
    //Delete Service
    const deleteService = async (e:any)=>{
        try{
            const id = e.currentTarget.id
            const response = await fetch(`/api/service/${id}`,{
            method: 'DELETE',
            })
        }catch{
            return Response.json({error: 'Error deleting Service'})
        }
    }

    //Edit Service
    const editService = async (e:any)=>{
        alert('Ha ha Wanna edit me???')
    }

    return (
        <div className="flex justify-end gap-2">
            <MdModeEdit onClick={editService} id={service_id} className="text-gray-500 text-3xl cursor-pointer"/>
            <MdDeleteForever onClick={deleteService} id={service_id} className="text-gray-500 text-3xl cursor-pointer"/>
        </div>
    )
}