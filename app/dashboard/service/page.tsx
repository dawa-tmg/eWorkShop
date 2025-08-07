import { RxTimer } from "react-icons/rx";
import { GiTakeMyMoney } from "react-icons/gi";
import AddService from "@/app/components/AddService";
import DeleteService from "@/app/components/DeleteService";

export default async function Service(){
    //Get Services
    const response = await fetch('http://localhost:3000/api/service')

    if(!response.ok){
        return <h1>Error Fetching Data!</h1>
    }
    const { services } = await response.json();

    return (
        <>
            <div className="border border-gray-100 rounded-xl shadow-md">
                <div className="flex items-center justify-between p-5">
                    <h2 className="text-xl font-bold">Available Services</h2>
                    <AddService />
                </div>
                <div className="w-full p-5">
                    {services.map((service: any) => (
                        <div key={service.service_id} className="hover:bg-gray-100 hover:rounded-xl shadow-md rounded-b-xl flex justify-between items-center mb-5 p-5">
                            <div>
                                <h2 className="text-lg text-gray-600 font-bold">{service.name}</h2>
                                <p className="text-lg text-gray-500">{service.description}</p>
                                <p className="text-lg text-gray-600 font-bold flex gap-2"><GiTakeMyMoney className="text-2xl text-gray-600" />Nu:{service.price}/-</p>
                                <p className="text-lg text-gray-500 font-bold flex gap-2"><RxTimer className="text-2xl text-gray-600" />{service.duration} min</p>
                            </div>
                            <DeleteService
                            service_id={service.service_id} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}