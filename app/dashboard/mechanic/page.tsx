import AddMechanic from "@/app/components/AddMechanic"

export default async function Mechanic(){
    //Get Mechanic
    const response = await fetch('http://localhost:3000/api/mechanic')
    if(!response.ok){
        return <h1>Error Fetching Data...</h1>
    }
    const { mechanics } = await response.json()

    return (
        <div>
            <div className="border border-gray-100 rounded-xl shadow-md">
                <div className="flex items-center justify-between p-5">
                    <h2 className="text-xl font-bold">Mechanics</h2>
                    <AddMechanic />
                </div>
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr className="text-left text-gray-500">
                            <th className="px-5 py-6">Name</th>
                            <th className="px-5 py-6">Email</th>
                            <th className="px-5 py-6">Phone</th>
                            <th className="px-5 py-6">Specialization</th>
                            <th className="px-5 py-6">Description</th>
                            <th className="px-5 py-6">Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                    {mechanics.map((mechanic:any)=>(
                        <tr key={mechanic.mechanic_id} className="hover:bg-gray-100 text-gray-500">
                            <td className="p-5">{mechanic.name}</td>
                            <td className="p-5">{mechanic.email}</td>
                            <td className="p-5">{mechanic.phone}</td>
                            <td className="p-5">{mechanic.specialization}</td>
                            <td className="p-5">{mechanic.description}</td>
                            <td className="p-5"><p className="text-center uppercase font-bold">{mechanic.availability.toString()}</p></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}