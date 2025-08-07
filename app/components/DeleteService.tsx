'use client'

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
        alert('Wanna edit id ' + e.currentTarget.id + ' ???')
    }

    return (
        <div className="flex space-x-5">
            <button onClick={editService} id={service_id} className="text-lg font-bold text-blue-600 hover:text-blue-800">Edit</button>
            <button onClick={deleteService} id={service_id} className="text-lg font-bold text-red-600 hover:text-red-800">Delete</button>
        </div>
    )
}