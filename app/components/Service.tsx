'use client'

import Input from "./Input";
interface ServiceProps {
  id: string,
  image: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  value: string
}

export default function Service({ id, image, name, description, price, duration, value }: ServiceProps) {
  //Event Handler
  const toggleAvail = function(e:any){
    const clickedId = e.currentTarget.id;
    const formId = clickedId.replace("btn-", "form-");
    const form = document.getElementById(formId);
    form?.classList.toggle("hidden"); 

    function hideOnClickOutside(event:any) {
      if (!form.contains(event.target)) { 
          form.classList.add('hidden');
          window.removeEventListener('click', hideOnClickOutside);
      }
      }
      setTimeout(() => {
          window.addEventListener('click', hideOnClickOutside);
    }, 0);
  }

  //Post Method
  const handleBooking = async function(e:any){
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const body = Object.fromEntries(formData)

      const response = await fetch('/api/availservice',{
        method: 'POST',
        body: JSON.stringify(body)
      })
  }

  return (
    <div className="bg-[#eee] rounded shadow-md p-5">
      <div className="h-auto flex flex-col relative">
        <img src={image} className="w-full h-60" />
        <div className="pt-4">
          <h2 className="text-2xl font-bold mb-1">{name}</h2>
          <p className="text-lg font-normal text-gray-700">{description}</p>
          <p className="text-lg font-normal font-semibold">${price}</p>
          <p className="text-lg font-normal font-semibold">{duration} Minutes</p>
          <button onClick={toggleAvail} id={`btn-${id}`} className="bg-red-500 rounded text-xl text-white font-semibold py-3 px-5">Avail Service</button>

          <form onSubmit={handleBooking} id={`form-${id}`} className="h-full w-full bg-gray-300/94 absolute transform translate-y-[-100%] shadow-md grid gap-4 p-10 hidden">
          <h2 className="text-2xl font-semibold text-gray-500">Avail Service</h2>
            <input name="service_id" value={id} type="hidden"/>
            <input className="focus:outline-none border border-gray-400 rounded px-2 py-4" placeholder={value} disabled/>
            <Input type="text" name="name" placeholder="Customer Name" />
            <Input type="text" name="vehicle" placeholder="Vehicle Number"/>
            <button className="bg-red-500 rounded text-xl text-white font-semibold py-3 px-5">SUBMIT</button>
          </form>

        </div>
      </div>
    </div>
  );
}
