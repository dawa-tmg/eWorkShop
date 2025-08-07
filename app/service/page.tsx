import Service from "../components/Service";

export default async function Services() {
  //Get Services
  const response = await fetch('http://localhost:3000/api/service')

  if(!response.ok){
    return <h1>Error Fetching Data!</h1>
  }
  const { services } = await response.json();
  
  return (
    <div className="w-[80%] mx-auto">
    <h2 className="text-4xl text-red-500 font-bold">Our Service</h2>
    <div className="grid grid-cols-3 gap-5 mt-5">
      {services.map((service: any) => (
        <div key={service.service_id}>
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
