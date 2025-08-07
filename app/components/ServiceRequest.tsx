'use client'

interface RequestProps{
    key: string,
    service_id: string, 
    name: string, 
    phone: string, 
    vehicle: string
}

export default async function AvailService({key, service_id, name, phone, vehicle}:RequestProps){
    //Post Service Request Review
    const handleSubmit = async (e:any)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const body = Object.fromEntries(formData)
        const { service_id, name, phone, vehicle, appointment_date, mechanic_id } = body;

        const response = await fetch('/api/booking',{
            method: 'POST',
            body: JSON.stringify({service_id, name, phone, vehicle, appointment_date, mechanic_id})
        })
    }

    return (
        <form onSubmit={handleSubmit} key={key} className="border-2 border-gray-500 rounded-xl grid grid-cols-1 p-5">
            <input className="focus:outline-none px-2" type="text" name="service_id" readOnly value={service_id}/>
            <input className="focus:outline-none font-bold px-2" name="name" type="text" readOnly value={name}/>
            <input className="focus:outline-none px-2" type="text" name="phone" readOnly value={phone}/>
            <input className="focus:outline-none px-2" type="text" name="vehicle" readOnly value={vehicle}/>
            <div className="grid grid-cols-2 gap-2 mt-4">
                <select className="focus:outline-none border rounded text-lg p-2" name="mechanic_id" id="">
                    <option value="1">John</option>
                    <option value="2">Doe</option>
                    <option value="3">Angela</option>
                </select>
                <input className="focus:outline-none border rounded px-2" type="date" name="appointment_date" />
                <button className="bg-blue-600 text-white text-center font-bold rounded-full cursor-pointer px-6 py-2">Submit</button>
            </div>
        </form>
    )
}