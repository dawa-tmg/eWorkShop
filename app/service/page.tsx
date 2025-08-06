import Service from "../components/Service";
import AddService from "../components/AddService";
import DeleteService from "../components/DeleteService";

export default async function Services() {
  //Fetch Services
  const response = await fetch('http://localhost:3000/api/service')

  if(!response.ok){
    return <h1>Error Fetching Data!</h1>
  }
  const { services } = await response.json();
  
  return (
    <div className="w-[80%] mx-auto">
    <h2 className="text-6xl text-red-500 font-bold">Our Service</h2>
    <div className="flex justify-end">
      <AddService/>
    </div>
    <div className="grid grid-cols-3 gap-5 ">
      {services.map((service: any) => (
        <div key={service.service_id}>
        <DeleteService 
          service_id={service.service_id}
        />
        <Service
          id={service.service_id}
          image={service.image}
          name={service.name}
          description={service.description}
          price={service.price}
          duration={service.duration}
          value={service.name}
        />
        </div>
      ))}
    </div>
    </div>
  );
}
