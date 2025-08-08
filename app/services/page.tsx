'use client'

import { useState, useEffect } from "react";
import { RxTimer } from "react-icons/rx";
import { GiTakeMyMoney } from "react-icons/gi";
import Input from "../components/Input";

export default function Services() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleForm, setVisibleForm] = useState<string | null>(null); // Track which service form is open

  // Fetch services on mount
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/service");
        if (!res.ok) throw new Error("Failed to fetch services");
        const { services } = await res.json();
        setServices(services);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // Toggle form
  const toggleForm = (serviceId: string) => {
    setVisibleForm((prev) => (prev === serviceId ? null : serviceId));
  };

  // Submit booking
  const submitBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const body = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/service-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed to submit booking");

      alert("Service request submitted successfully!");
      e.currentTarget.reset();
      setVisibleForm(null); // Close form
    } catch (err: any) {
      alert(err.message);
    }
  };

  if (loading) return <h1>Loading services...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-4xl text-red-500 font-bold">Our Service</h2>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {services.map((service) => (
          <div
            key={service.service_id}
            className="bg-[#eee] rounded shadow-md p-5 relative"
          >
            <img src={service.image} className="w-full h-60" />
            <div className="pt-4">
              <h2 className="text-2xl font-bold mb-1">{service.name}</h2>
              <p className="text-lg text-gray-700 my-2">
                {service.description}
              </p>
              <p className="text-lg font-semibold flex gap-2">
                <GiTakeMyMoney className="text-2xl text-gray-600" /> Nu:{" "}
                {service.price}
              </p>
              <p className="text-lg font-semibold flex gap-2">
                <RxTimer className="text-2xl text-gray-600" /> {service.duration}{" "}
                Minutes
              </p>

              {/* Toggle Button */}
              <button
                onClick={() => toggleForm(service.service_id)}
                className="bg-red-500 rounded text-xl text-white font-semibold mt-2 py-3 px-5"
              >
                Avail Service
              </button>

              {/* Booking Form */}
              {visibleForm === service.service_id && (
                <form
                  onSubmit={submitBooking}
                  className="h-full w-full bg-gray-300/94 absolute top-0 left-0 shadow-md grid gap-4 p-10"
                >
                  <h2 className="border-b-2 text-2xl font-semibold text-gray-500">
                    Avail Service
                  </h2>
                  <input
                    name="service_id"
                    value={service.service_id}
                    type="hidden"
                  />
                  <Input type="text" name="name" placeholder="Customer Name" />
                  <Input type="number" name="phone" placeholder="Phone Number" />
                  <Input
                    type="text"
                    name="vehicle"
                    placeholder="Vehicle Number"
                  />
                  <button className="bg-red-500 rounded text-xl text-white font-semibold py-3 px-5">
                    SUBMIT
                  </button>
                </form>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
