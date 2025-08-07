import AvailService from "@/app/components/ServiceRequest"

export default async function Review(){
    //Get Service Avail
    const response = await fetch('http://localhost:3000/api/service-request')
    if(!response.ok){
        return (
            <h1>Error Fetching Data...</h1>
        )
    }
    const { serviceRequest } = await response.json();

    //Get Service Avail
    const returnMechanic = await fetch('http://localhost:3000/api/mechanic')
    if(!returnMechanic.ok){
        return (
            <h1>Error Fetching Data...</h1>
        )
    }
    const { mechanics } = await returnMechanic.json();


    return (
        <div className="shadow-md rounded grid grid-cols-3 gap-5 p-10">
            {serviceRequest.map((request:any)=>(
                <AvailService 
                key={request.avail_service_id}
                service_id={request.service_id}
                name={request.name}
                phone={request.phone}
                vehicle={request.vehicle}
                />
            ))}
        </div>
    )
}